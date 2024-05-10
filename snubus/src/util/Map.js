import React, { useEffect, useRef, useState } from "react";

function Map({ position }) {
  // kakaomap이 있는 요소의 ref
  const kakaoMap = useRef();

  // 마운트 되기 전 map 확대 및 이동 위치 가져오기
  const [mapInfo, setMapInfo] = useState({
    level: "",
    centerY: "",
    centerX: "",
  });

  // 5511번 버스들 각각의 위치 좌표 배열
  const busesPos = [
    [37.6141, 126.910907],
    [37.6142, 126.911007],
    [37.6143, 126.91207],
  ];

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
        // 카카오맵 그리기(현재 위치 위도, 경도 인자로)
        printKakaomap(curLat, curLlon);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때
    }
  };

  // 카카오맵 그리기(현재 위치 위도, 경도 인자로)
  function printKakaomap(curLat, curLlon) {
    // ref가 kakaoMap인 요소를 container에 넣기
    const container = kakaoMap.current; //지도를 담을 영역의 DOM 레퍼런스
    // 지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new window.kakao.maps.LatLng(
        mapInfo.centerY || curLat,
        mapInfo.centerX || curLlon
      ), //지도의 중심좌표. -> 마운트 되기 전 map 확대 및 이동 위치가 있으면 그걸 중심좌표로 , 없으면 현재 위치를 중심좌표로
      level: mapInfo.level || 6, //지도의 레벨(확대, 축소 정도)
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

    // 5511번 버스들 위치 좌표 배열마다 마커 만들기
    const markers = busesPos.map(
      (busPos) =>
        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(busPos[0], busPos[1]),
        })
    );

    // 마커를 클러스터에 등록 -> 마커 print

    // 현재 위치 마커 print
    clusterer.addMarker(curMarker);

    // 5511번 버스들 위치 마커 print
    markers.forEach((marker) => {
      clusterer.addMarker(marker);
    });
  };

  return <div ref={kakaoMap} style={{ width: "500px", height: "400px" }}></div>;
}

export default Map;
