import React, { useContext, useEffect, useRef, useState } from "react";
import { Maps } from "./MapStyle";
import { isMapPrintContext } from "../App";
import { flex } from "../util/publicStyleComponets";

function Map({ position, station }) {
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
        level: mapInfo.level || 3, //지도의 레벨(확대, 축소 정도)
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

    // 현재 위치 마커 만들기
    const curMarker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(curLat, curLlon),
    });

    // 해당 노선 모든 버스들 위치 좌표 배열마다 마커 만들기
    const busMarkers = position.map(
      (busPos) =>
        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(busPos[0], busPos[1]),
          clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        })
    );

    // 해당 노선 모든 정류장 위치 좌표 배열마다 마커 만들기
    const stationMarkers = station.map(
      (stationPos) =>
        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(
            stationPos.position[0],
            stationPos.position[1]
          ),
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
