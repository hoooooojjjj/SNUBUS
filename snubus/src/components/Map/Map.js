import React, { useContext, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Maps } from "./MapStyle";
import { isMapPrintContext } from "../../App";
import { busDataContext, busStationPosContext } from "../../routes/View5511Bus";
import StationInfoModal from "./StationInfoModal/StationInfoMomal";

function Map({ getData }) {
  // kakaomap이 있는 요소의 ref
  const kakaoMap = useRef();

  /* state 코드 */

  const [curPos, setCurPos] = useState([]);

  // 카카오맵이 화면에 표시됐는지 판별하는 state
  const [isMapPrint, setIsMapPrint] = useContext(isMapPrintContext);

  // 클릭한 버스 정류장 좌표 받아오는 context
  const [busStationPos, setBusStationPos] = useContext(busStationPosContext);

  // 마운트 되기 전 map 확대 및 이동 위치 가져오기
  const [mapInfo, setMapInfo] = useState({
    level: "",
    centerY: "",
    centerX: "",
  });

  // 버스 위치 좌표 데이터 context
  const position = useContext(busDataContext).busPoses.busPositionXY;

  // 버스 정류장 관련 정보 context
  const busStationInfos = useContext(busDataContext).busStationInfos;

  /* 함수 코드 */

  // 현재 위치 좌표 가져오기
  const getCurrentPosition = () => {
    // HTML5의 geolocation으로 사용할 수 있는지 확인
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옴
      navigator.geolocation.getCurrentPosition(function (position) {
        const curLat = position.coords.latitude, // 위도
          curLlon = position.coords.longitude; // 경도

        setCurPos([curLat, curLlon]);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때
    }
  };

  const listenIdleEvent_AndSetMapInfo = (map) => {
    // 지도의 중심 좌표나 확대 수준이 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록
    window.kakao.maps.event.addListener(map, "idle", function () {
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
  };

  // 카카오맵 그리기(현재 위치 위도, 경도 인자로)
  function printKakaomap() {
    // Maps 컴포넌트가 존재할 때
    if (kakaoMap.current) {
      // ref가 kakaoMap인 요소를 container에 넣기
      const container = kakaoMap.current; // 지도를 담을 영역의 DOM 레퍼런스
      // 지도를 생성할 때 필요한 기본 옵션
      const options = {
        center: new window.kakao.maps.LatLng(
          mapInfo.centerY || curPos[0],
          mapInfo.centerX || curPos[1]
        ), //지도의 중심좌표. -> 마운트 되기 전 map 확대 및 이동 위치가 있으면 그걸 중심좌표로 , 없으면 현재 위치를 중심좌표로
        level: mapInfo.level || 5, //지도의 레벨(확대, 축소 정도)
      };
      const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      listenIdleEvent_AndSetMapInfo(map);

      // 마커 생성
      printMarker(map);

      // 지도가 모두 렌더링된 후 setIsMapPrint(true) 호출
      setIsMapPrint(true);
    }
  }

  // 마커 이미지 커스터마이징
  const MakeMarkerImage = (imageUrl) => {
    //  마커 이미지 정보
    const ImageSrc = process.env.PUBLIC_URL + `assets/${imageUrl}.png`, // 마커이미지의 주소
      ImageSize = new window.kakao.maps.Size(40),
      ImageOption = { offset: new window.kakao.maps.Point(20, 20) }; // 마커이미지의 크기

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성
    const markerImage = new window.kakao.maps.MarkerImage(
      ImageSrc,
      ImageSize,
      ImageOption
    );

    // 마커 이미지 리턴
    return markerImage;
  };

  // 마커 생성 및 print
  const printMarker = (map) => {
    // 1. 현재 위치 마커

    // 현재 위치 마커 만들기
    const curMarker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(curPos[0], curPos[1]),
      image: MakeMarkerImage("currentMarker"),
    });

    // 현재 위치 마커 print
    curMarker.setMap(map);

    // 2. 해당 노선 모든 버스들 위치 마커

    // 모든 버스 마커 만들기
    const busMarkers = position.map(
      (busPos) =>
        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(busPos[0], busPos[1]),
          clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        })
    );

    // 해당 노선 모든 버스들 위치 마커 print
    busMarkers.forEach((marker) => {
      marker.setMap(map); // 클러스터러를 만들지 않고 마커 생성

      // 마커에 클릭 이벤트 등록
      window.kakao.maps.event.addListener(marker, "click", function () {
        console.log("12");
      });
    });

    // 3. 클릭한 버스 정류장 위치 마커

    // 정류장을 클릭했다면(busStationPos에 데이터가 할당되었다면)
    if (busStationPos.name) {
      // !이렇게 하면 리렌더링될 때 무조건 클릭한 정류장 좌표로 중심좌표가 돌아가는 문제 생김!

      // 정류장을 클릭하면 클릭한 정류장 좌표로 중심좌표 이동
      map.setCenter(
        new window.kakao.maps.LatLng(busStationPos.pos[0], busStationPos.pos[1])
      );
      //  정류장을 클릭하면 지도 레벨 5로
      map.setLevel(5);

      // 클릭한 정류장 버스 마커 만들기

      const stationMarker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          busStationPos.pos[0],
          busStationPos.pos[1]
        ),
        image: MakeMarkerImage("stationMarker"),
      });

      // StationInfoModal에 정류장 도착 관련 정보 전달을 위해
      // 정류장 id를 통해 현재 클릭한 정류장 '도착 관련 정보' 배열 필터링

      // 중앙대학교 방면인지 신림2동차고지 방면인지에 따라 다른 방면의 busStationInfos를 가져옴
      const Direction = busStationPos.Direction
        ? busStationInfos.DirectionToStart
        : busStationInfos.DirectionToEnd;

      // 클릭한 정류장의 도착 정보만 필터링
      const curStation = Direction.filter(
        (busStationInfo) => parseInt(busStationInfo.stId) === busStationPos.stId
      );

      // 인포윈도우 컨텐츠
      // createRoot를 사용하여 StationInfoModal 컴포넌트를 iwContent div DOM에 마운트(렌더링)
      const iwContent = document.createElement("div");
      const root = createRoot(iwContent);
      root.render(<StationInfoModal curStation={curStation} />);

      // 인포윈도우를 생성
      var infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
      });

      // 마커 위에 인포윈도우를 표시
      infowindow.open(map, stationMarker);

      // 클릭한 버스 정류장 마커 print
      stationMarker.setMap(map);
    }
  };

  /* useEffect() 코드 */

  // 현재 위치 좌표 가져오기
  useEffect(() => {
    getCurrentPosition();
  }, []);

  // 카카오맵 및 마커 프린트
  useEffect(() => {
    // directionsData에 데이터가 할당되고 Maps 컴포넌트가 존재할 때
    if (kakaoMap.current && curPos.length) {
      printKakaomap();
    }
  }, [position, curPos, busStationPos]);

  useEffect(() => {
    // Map 컴포넌트가 언마운트되면 다시 isMapPrint를 false로 바꿈
    return () => {
      setIsMapPrint(false);
    };
  }, []);

  return (
    <>
      <button onClick={getData}>업데이트</button>
      <Maps ref={kakaoMap}></Maps>
    </>
  );
}

export default Map;
