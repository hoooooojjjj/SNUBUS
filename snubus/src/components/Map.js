import React, { useContext, useEffect, useRef, useState } from "react";
import { Maps } from "./MapStyle";
import { isMapPrintContext } from "../App";
import getDirectionsData from "../util/getGoogleDirections";

function Map({
  position,
  bus_5511Stations_startForPolyLine,
  bus_5511Stations_endForPolyLine,
  bus_5511Stations_forMarker,
}) {
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

  const [directionsData, setDirectionsData] = useState([]);
  const [directionsData2, setDirectionsData2] = useState([]);

  useEffect(() => {
    getDirectionsData(
      "37.4667414611",
      "126.9479522861",
      "37.4487952",
      "126.9520773"
    ).then((res) => {
      setDirectionsData(res);
    });
    getDirectionsData(
      "37.4487952",
      "126.9520773",
      "37.48011095",
      "126.9527298"
    ).then((res) => {
      setDirectionsData2(res);
    });
  }, []);

  useEffect(() => {
    // Maps 컴포넌트가 존재할 때
    if (kakaoMap.current) {
      // 현재 위치 좌표 가져오기
      getCurrentPosition(printKakaomap);
    }
  }, [position]);

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

      // 버스 노선 기점-> 종점 방면 폴리라인 생성
      const stationPosForStartArray1 = [
        directionsData.map(
          (direction) =>
            new window.kakao.maps.LatLng(direction[0], direction[1])
        ),
      ];

      // 폴리라인 생성
      const polylineForStart1 = new window.kakao.maps.Polyline({
        map: map,
        path: stationPosForStartArray1,
        strokeWeight: 4,
        strokeColor: "blue",
        strokeOpacity: 1,
        strokeStyle: "solid",
      });
      // 폴리라인 적용
      polylineForStart1.setMap(map);

      // 버스 노선 기점-> 종점 방면 폴리라인 생성
      const stationPosForStartArray2 = [
        directionsData2.map(
          (direction) =>
            new window.kakao.maps.LatLng(direction[0], direction[1])
        ),
      ];

      // 폴리라인 생성
      const polylineForStart2 = new window.kakao.maps.Polyline({
        map: map,
        path: stationPosForStartArray2,
        strokeWeight: 4,
        strokeColor: "blue",
        strokeOpacity: 1,
        strokeStyle: "solid",
      });
      // 폴리라인 적용
      polylineForStart2.setMap(map);

      // // 버스 노선 기점-> 종점 방면 폴리라인 생성
      // const stationPosForEndArray = [
      //   bus_5511Stations_endForPolyLine.map(
      //     (bus_5511Station_start) =>
      //       new window.kakao.maps.LatLng(
      //         bus_5511Station_start.position[0],
      //         bus_5511Station_start.position[1]
      //       )
      //   ),
      // ];
      // // 폴리라인 생성
      // const polylineForEnd = new window.kakao.maps.Polyline({
      //   map: map,
      //   path: [...stationPosForEndArray],
      //   endArrow: true,
      //   strokeWeight: 4,
      //   strokeColor: "red",
      //   strokeOpacity: 1,
      //   strokeStyle: "solid",
      // });
      // // 폴리라인 적용
      // polylineForEnd.setMap(map);

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

      // 지도가 렌더링된 후 setIsMapPrint(true) 호출
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
