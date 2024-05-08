import React, { useEffect, useState, useRef } from "react";

function Map() {
  // 현재 버스 위치 상태
  const [position, setPosition] = useState([]);
  // kakaomap이 있는 요소의 ref
  const kakaoMap = useRef();

  useEffect(() => {
    console.log(window.kakao);
    // 버스 위치 정보 fetching
    getData();
    // 카카오맵 그리기
    printKakaomap();
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

  // 카카오맵 그리기
  function printKakaomap() {
    // ref가 kakaoMap인 요소를 container에 넣기
    const container = kakaoMap.current; //지도를 담을 영역의 DOM 레퍼런스
    // 지도를 생성할 때 필요한 기본 옵션
    let options = {
      center: new window.kakao.maps.LatLng(
        37.365264512305174,
        127.10676860117488
      ), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    var map = window.kakao && new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }

  return <div ref={kakaoMap} style={{ width: "500px", height: "400px" }}></div>;
}

export default Map;
