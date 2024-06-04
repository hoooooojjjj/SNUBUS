import React, { useContext, useEffect, useRef, useState } from "react";
import { Maps } from "./MapStyle";
import { isMapPrintContext } from "../App";
import polyUtil from "polyline-encoded";
import {
  bus_5511Stations_forEndPolyline,
  bus_5511Stations_forStartPolyline,
} from "../busStationPos";

function Map({ position }) {
  // kakaomap이 있는 요소의 ref
  const kakaoMap = useRef();

  /* state 코드 */

  // 카카오맵이 화면에 표시됐는지 판별하는 state
  const [isMapPrint, setIsMapPrint] = useContext(isMapPrintContext);

  // 마운트 되기 전 map 확대 및 이동 위치 가져오기
  const [mapInfo, setMapInfo] = useState({
    level: "",
    centerY: "",
    centerX: "",
  });

  // 중앙대학교 방면(기점->종점 방면) DirectionsData 저장하는 상태
  const [startDirectionsData, setStartDirectionsData] = useState([]);

  // 신림2동차고지 방면(종점->기점 방면) DirectionsData 저장하는 상태
  const [endDirectionsData, setEndDirectionsData] = useState([]);

  /* 함수 코드 */

  // Google directions API에 버스 노선 경로 좌표 데이터 fetching 함수
  // 출발지 - 목적지 위도,경도 좌표를 인자로 받음
  async function getDirectionsData(
    originLatitude,
    originLongitude,
    destinationLatitude,
    destinationLongitude
  ) {
    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${String(
            originLatitude
          )},${String(originLongitude)}&destination=${String(
            destinationLatitude
          )},${String(
            destinationLongitude
          )}&mode=transit&transit_mode=bus&key=${
            process.env.REACT_APP_GOOGLEMAPS_API_KEY
          }`
        )}`
      );
      // 데이터 받아서 json 형태로 저장
      const jsonData = await response.json();
      const directions = JSON.parse(jsonData.contents);

      // polyline-encoded 라이브러리를 통해 버스 노선 경로 좌표 디코딩
      const decodeddirections = polyUtil.decode(
        directions.routes[0].overview_polyline.points
      );

      // 데이터의 overview_polyline.points 데이터(경로 데이터) 추출 후 리턴
      return decodeddirections;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  // 모든 DirectionsData 호출 함수 모음
  async function getAllDirectionsData() {
    // 중앙대학교 방면 폴리라인 좌표 데이터를 비동기로 호출하여 프로미스 배열 생성
    const startDirectionsDataPromises = bus_5511Stations_forStartPolyline.map(
      (bus_5511Station) =>
        getDirectionsData(
          String(bus_5511Station.origin[0]),
          String(bus_5511Station.origin[1]),
          String(bus_5511Station.destination[0]),
          String(bus_5511Station.destination[1])
        )
    );
    // 신림2동차고지 방면 폴리라인 좌표 데이터를 비동기로 호출하여 프로미스 배열 생성
    const endDirectionsDataPromises = bus_5511Stations_forEndPolyline.map(
      (bus_5511Station) =>
        getDirectionsData(
          String(bus_5511Station.origin[0]),
          String(bus_5511Station.origin[1]),
          String(bus_5511Station.destination[0]),
          String(bus_5511Station.destination[1])
        )
    );

    // 모든 중앙대학교 방면 데이터의 프로미스를 완료하고 결과를 배열로 저장
    const startDirectionsDataArray = await Promise.all(
      startDirectionsDataPromises
    );

    // 모든 신림2동차고지 방면 데이터의 프로미스를 완료하고 결과를 배열로 저장
    const endDirectionsDataArray = await Promise.all(endDirectionsDataPromises);

    // 완료된 중앙대학교 방면 데이터를 상태에 업데이트
    setStartDirectionsData(startDirectionsDataArray);
    // 완료된 신림2동차고지 방면 데이터를 상태에 업데이트
    setEndDirectionsData(endDirectionsDataArray);
  }

  // 폴리라인 생성 -> 해당 경로 좌표 배열, 지도 객체, 폴리라인 색상을 인자로 받음
  const printPolyline = (directionsData, map, strokeColor) => {
    // 버스 노선 경로 좌표 배열
    const stationPosArray = [
      directionsData.map(
        (direction) => new window.kakao.maps.LatLng(direction[0], direction[1])
      ),
    ];

    // 버스 노선 경로 좌표 배열로 폴리라인 생성
    const polyline = new window.kakao.maps.Polyline({
      map: map,
      path: stationPosArray,
      strokeWeight: 4,
      strokeColor: strokeColor,
      strokeOpacity: 0.5,
      strokeStyle: "solid",
    });

    // 폴리라인 적용
    polyline.setMap(map);
  };

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
      startDirectionsData.forEach((direction) => {
        printPolyline(direction, map, "blue");
      });

      endDirectionsData.forEach((direction) => {
        printPolyline(direction, map, "red");
      });

      // 지도가 모두 렌더링된 후 setIsMapPrint(true) 호출
      setIsMapPrint(true);
    }
  }

  // 마커 생성
  const printMarker = (map, curLat, curLlon) => {
    // 현재 위치 마커 이미지 정보
    const CurImageSrc = process.env.PUBLIC_URL + `assets/currentMarker.png`, // 마커이미지의 주소
      CurImageSize = new window.kakao.maps.Size(20),
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

    // 마커 print

    // 현재 위치 마커 print
    curMarker.setMap(map);

    // 해당 노선 모든 버스들 위치 마커 print
    busMarkers.forEach((marker) => {
      marker.setMap(map); // 클러스터러를 만들지 않고 마커 생성

      // 마커에 클릭 이벤트 등록
      window.kakao.maps.event.addListener(marker, "click", function () {
        console.log("12");
      });
    });
  };

  /* useEffect() 코드 */

  useEffect(() => {
    // DirectionsData 가져오기
    getAllDirectionsData();
  }, []);

  useEffect(() => {
    // directionsData에 데이터가 할당되고 Maps 컴포넌트가 존재할 때
    if (
      startDirectionsData.length > 0 &&
      endDirectionsData.length > 0 &&
      kakaoMap.current
    ) {
      // 현재 위치 좌표 가져오기
      getCurrentPosition(printKakaomap);
    }
  }, [startDirectionsData, endDirectionsData]);

  useEffect(() => {
    // Map 컴포넌트가 언마운트되면 다시 isMapPrint를 false로 바꿈
    return () => {
      setIsMapPrint(false);
    };
  }, [setIsMapPrint]);

  return <Maps ref={kakaoMap}></Maps>;
}

export default Map;
