import React, { useEffect, useState, useRef } from "react";

function Map() {
  // 현재 버스 위치 상태
  const [position, setPosition] = useState([]);

  // kakaomap이 있는 요소의 ref
  const kakaoMap = useRef();

  useEffect(() => {
    // 버스 위치 정보 fetching
    getData();
    // 현재 위치 좌표 가져오기
    getCurrentPosition(printKakaomap);
  }, []);

  // 버스 위치 정보 fetching
  function getData() {
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=100100118&resultType=json`
      )}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        // 현재 버스의 WGS84 좌표
        const posX = JSON.parse(data.contents).msgBody.itemList[0].posX;
        const posY = JSON.parse(data.contents).msgBody.itemList[0].posY;
        setPosition((prev) => [posX, posY]);
      });
  }

  // 현재 위치 좌표 가져오기
  const getCurrentPosition = (printKakaomap) => {
    // HTML5의 geolocation으로 사용할 수 있는지 확인
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옴
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        // 카카오맵 그리기
        printKakaomap(lat, lon);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때
    }
  };

  // 카카오맵 그리기
  function printKakaomap(lat, lon) {
    // ref가 kakaoMap인 요소를 container에 넣기
    const container = kakaoMap.current; //지도를 담을 영역의 DOM 레퍼런스
    // 지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new window.kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    printMarker(map, lat, lon);
  }

  // 현재 위치 마커 생성
  const printMarker = (map, lat, lon) => {
    const clusterer = new window.kakao.maps.MarkerClusterer({
      map: map,
      gridSize: 35,
    });

    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(lat, lon),
    });

    clusterer.addMarker(marker);
  };

  return <div ref={kakaoMap} style={{ width: "500px", height: "400px" }}></div>;
}

export default Map;
