import React, { useEffect, useRef, useState } from "react";

function Map({ position }) {
  // kakaomap이 있는 요소의 ref
  const kakaoMap = useRef();

  //
  const [mapInfo, setMapInfo] = useState({
    level: "",
    centerY: "",
    centerX: "",
  });

  useEffect(() => {
    // 현재 위치 좌표 가져오기
    getCurrentPosition(printKakaomap);
  }, [position]);

  // 현재 위치 좌표 가져오기
  const getCurrentPosition = (printKakaomap) => {
    // HTML5의 geolocation으로 사용할 수 있는지 확인
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옴
      navigator.geolocation.getCurrentPosition(function (position) {
        const curLat = position.coords.latitude, // 위도
          curLlon = position.coords.longitude; // 경도
        // 카카오맵 그리기
        printKakaomap(curLat, curLlon);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때
    }
  };

  // 카카오맵 그리기
  function printKakaomap(curLat, curLlon) {
    // ref가 kakaoMap인 요소를 container에 넣기
    const container = kakaoMap.current; //지도를 담을 영역의 DOM 레퍼런스
    // 지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new window.kakao.maps.LatLng(
        mapInfo.centerY || Number(position[0]),
        mapInfo.centerX || Number(position[1])
      ), //지도의 중심좌표.
      level: mapInfo.level || 6, //지도의 레벨(확대, 축소 정도)
    };
    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    window.kakao.maps.event.addListener(map, "center_changed", function () {
      // 지도의  레벨을 얻어옵니다
      let newMapInfo = {
        ...mapInfo,
        level: map.getLevel(),
        centerY: map.getCenter().Ma,
        centerX: map.getCenter().La,
      };
      setMapInfo(newMapInfo);
    });

    printMarker(map, curLat, curLlon);
  }

  // 마커 생성
  const printMarker = (map, curLat, curLlon) => {
    const clusterer = new window.kakao.maps.MarkerClusterer({
      map: map,
      gridSize: 35,
    });

    const curMarker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(curLat, curLlon),
    });

    console.log(Number(position[0]), Number(position[1]));
    const busMarker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(
        Number(position[0]),
        Number(position[1])
      ),
    });
    const markers = [curMarker, busMarker];
    clusterer.addMarker(curMarker);
    clusterer.addMarker(busMarker);
  };

  return <div ref={kakaoMap} style={{ width: "500px", height: "400px" }}></div>;
}

export default Map;
