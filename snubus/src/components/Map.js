import React, { useContext, useEffect, useRef, useState } from "react";
import { Maps } from "./MapStyle";
import { isMapPrintContext } from "../App";
import getDirectionsData from "../util/getGoogleDirections";
import printPolyline from "../util/printPolyline";

function Map({ position, bus_5511Stations_forMarker }) {
  // 카카오맵이 화면에 표시됐는지 판별하는 state
  const [isMapPrint, setIsMapPrint] = useContext(isMapPrintContext);

  // kakaomap이 있는 요소의 ref
  const kakaoMap = useRef();

  // 마운트 되기 전 map 확대 및 이동 위치 가져오기
  const [mapInfo, setMapInfo] = useState({
    level: "",
    centerY: "",
    centerX: "",
  });

  // 모든 DirectionsData 저장하는 상태
  const [directionsData, setDirectionsData] = useState([]);

  // 모든 DirectionsData 호출 함수 모음
  async function getAllDirectionsData() {
    // 서울대학교(중앙대학교 방면) -> 제2공학관(중앙대학교 방면) 경로 좌표 fetch
    const start_oneDirectionsData = await getDirectionsData(
      "37.4667414611",
      "126.9479522861",
      "37.4487952",
      "126.9520773"
    );

    // 제2공학관(중앙대학교 방면)-> 서울대입구역(중앙대학교 방면) 경로 좌표 fetch
    const start_twoDirectionsData = await getDirectionsData(
      "37.4487952",
      "126.9520773",
      "37.48011095",
      "126.9527298"
    );

    // 서울대입구역(신림2동차고지 방면)->에너지자원연구소(신림2동차고지 방면) 경로 좌표 fetch
    const end_oneDirectionsData = await getDirectionsData(
      "37.48070059",
      "126.952444",
      "37.45359525",
      "126.9522142"
    );

    // 에너지자원연구소(신림2동차고지 방면) -> 유회진학술정보관.제1공학관(신림2동차고지 방면) 경로 좌표 fetch
    const end_twoDirectionsData = await getDirectionsData(
      "37.45359525",
      "126.9522142",
      "37.451283",
      "126.952595"
    );

    // 유회진학술정보관.제1공학관(신림2동차고지 방면) -> 신림중.삼성고.관악아트홀·도서관(신림2동차고지 방면) 경로 좌표 fetchs
    const end_threeDirectionsData = await getDirectionsData(
      "37.451283",
      "126.952595",
      "37.47055199",
      "126.944133"
    );

    setDirectionsData([
      start_oneDirectionsData,
      start_twoDirectionsData,
      end_oneDirectionsData,
      end_twoDirectionsData,
      end_threeDirectionsData,
    ]);
  }

  useEffect(() => {
    // DirectionsData 가져오기
    getAllDirectionsData();
  }, [position]);

  useEffect(() => {
    // directionsData에 데이터가 할당되고 Maps 컴포넌트가 존재할 때
    if (directionsData.length === 5 && kakaoMap.current) {
      // 현재 위치 좌표 가져오기
      getCurrentPosition(printKakaomap);
    }
  }, [directionsData]);

  useEffect(() => {
    // Map 컴포넌트가 언마운트되면 다시 isMapPrint를 false로 바꿈
    return () => {
      setIsMapPrint(false);
    };
  }, []);

  // 현재 위치 좌표 가져오기
  const getCurrentPosition = (printKakaomap) => {
    // HTML5의 geolocation으로 사용할 수 있는지 확인
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옴
      navigator.geolocation.getCurrentPosition(function (position) {
        const curLat = position.coords.latitude, // 위도
          curLlon = position.coords.longitude; // 경도
        // 카카오맵 그리기(현재 위치 위도, 경도 인자로)
        printKakaomap(curLat, curLlon);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때
    }
  };

  // 카카오맵 그리기(현재 위치 위도, 경도 인자로)
  function printKakaomap(curLat, curLlon) {
    // Maps 컴포넌트가 존재할 때
    if (kakaoMap.current) {
      // ref가 kakaoMap인 요소를 container에 넣기
      const container = kakaoMap.current; // 지도를 담을 영역의 DOM 레퍼런스
      // 지도를 생성할 때 필요한 기본 옵션
      const options = {
        center: new window.kakao.maps.LatLng(
          mapInfo.centerY || curLat,
          mapInfo.centerX || curLlon
        ), //지도의 중심좌표. -> 마운트 되기 전 map 확대 및 이동 위치가 있으면 그걸 중심좌표로 , 없으면 현재 위치를 중심좌표로
        level: mapInfo.level || 1, //지도의 레벨(확대, 축소 정도)
      };
      const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록
      window.kakao.maps.event.addListener(map, "center_changed", function () {
        // 사용자가 지정한 지도의 레벨, 좌표를 얻어옴
        let newMapInfo = {
          ...mapInfo,
          level: map.getLevel(),
          centerY: map.getCenter().Ma,
          centerX: map.getCenter().La,
        };
        // 마운트 되기 전 map 확대 및 이동 위치
        setMapInfo(newMapInfo);
      });

      // 마커 생성
      printMarker(map, curLat, curLlon);

      // 모든 경로 좌표 폴리라인 생성
      directionsData.forEach((direction, i) => {
        printPolyline(direction, map, i < 2 ? "blue" : "red");
      });

      // 지도가 모두 렌더링된 후 setIsMapPrint(true) 호출
      setIsMapPrint(true);
    }
  }

  // 마커 생성
  const printMarker = (map, curLat, curLlon) => {
    // 마커 클러스터 만들기
    const clusterer = new window.kakao.maps.MarkerClusterer({
      // 옵션
      map: map,
      gridSize: 35,
    });

    // 현재 위치 마커 이미지 정보
    const CurImageSrc = process.env.PUBLIC_URL + `assets/currentMarker.png`, // 마커이미지의 주소
      CurImageSize = new window.kakao.maps.Size(40),
      CurImageOption = { offset: new window.kakao.maps.Point(20, 20) }; // 마커이미지의 크기

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성
    const CurmarkerImage = new window.kakao.maps.MarkerImage(
      CurImageSrc,
      CurImageSize,
      CurImageOption
    );
    // 현재 위치 마커 만들기
    const curMarker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(curLat, curLlon),
      image: CurmarkerImage,
    });

    // // 버스 마커 이미지 정보
    // const BusImageSrc = process.env.PUBLIC_URL + `assets/FeederBus.png`, // 마커이미지의 주소
    //   BusImageSize = new window.kakao.maps.Size(30),
    //   BusImageOption = { offset: new window.kakao.maps.Point(5, 0) }; // 마커이미지의 크기

    // // 마커의 이미지정보를 가지고 있는 마커이미지를 생성
    // const BusMarkerImage = new window.kakao.maps.MarkerImage(
    //   BusImageSrc,
    //   BusImageSize,
    //   BusImageOption
    // );

    // 해당 노선 모든 버스들 위치 좌표 배열마다 마커 만들기
    const busMarkers = position.map(
      (busPos) =>
        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(busPos[0], busPos[1]),
          // image: BusMarkerImage,
          clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        })
    );

    // 버스 마커 이미지 정보
    const stationImageSrc = process.env.PUBLIC_URL + `assets/stationMarker.png`, // 마커이미지의 주소
      stationImageSize = new window.kakao.maps.Size(30),
      stationImageOption = { offset: new window.kakao.maps.Point(15, 15) }; // 마커이미지의 크기

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성
    const stationMarkerImage = new window.kakao.maps.MarkerImage(
      stationImageSrc,
      stationImageSize,
      stationImageOption
    );
    // 해당 노선 모든 정류장 위치 좌표 배열마다 마커 만들기
    const stationMarkers = bus_5511Stations_forMarker.map(
      (stationPos) =>
        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(
            stationPos.position[0],
            stationPos.position[1]
          ),
          image: stationMarkerImage,
        })
    );

    // 마커를 클러스터에 등록 -> 마커 print

    // 현재 위치 마커 print
    clusterer.addMarker(curMarker);

    // 해당 노선 모든 버스들 위치 마커 print
    busMarkers.forEach((marker) => {
      clusterer.addMarker(marker);

      // 마커에 클릭이벤트를 등록
      window.kakao.maps.event.addListener(marker, "click", function () {
        console.log("12");
      });
    });

    // 해당 노선 모든 정류장들 위치 마커 print
    stationMarkers.forEach((marker) => {
      clusterer.addMarker(marker);
    });
  };

  return <Maps ref={kakaoMap}></Maps>;
}

export default Map;
