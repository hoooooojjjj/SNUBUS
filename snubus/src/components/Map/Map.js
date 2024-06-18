import React, { useContext, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Maps } from "./MapStyle";
import { isMapPrintContext } from "../../App";
import { busDataContext, busStationPosContext } from "../../routes/View5511Bus";
import StationInfoModal from "./StationInfoModal/StationInfoMomal";

function Map() {
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

  // // 폴리라인 생성 -> 해당 경로 좌표 배열, 지도 객체, 폴리라인 색상을 인자로 받음
  // const printPolyline = (directionsData, map, strokeColor) => {
  //   // 버스 노선 경로 좌표 배열
  //   const stationPosArray = [
  //     directionsData.map(
  //       (direction) => new window.kakao.maps.LatLng(direction[0], direction[1])
  //     ),
  //   ];

  //   // 버스 노선 경로 좌표 배열로 폴리라인 생성
  //   const polyline = new window.kakao.maps.Polyline({
  //     map: map,
  //     path: stationPosArray,
  //     strokeWeight: 4,
  //     strokeColor: strokeColor,
  //     strokeOpacity: 0.5,
  //     strokeStyle: "solid",
  //   });

  //   // 폴리라인 적용
  //   polyline.setMap(map);
  // };

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

      // // 모든 경로 좌표 폴리라인 생성
      // if (startDirectionsData.length > 0) {
      //   startDirectionsData.forEach((direction) => {
      //     printPolyline(direction, map, "blue");
      //   });
      // }

      // if (endDirectionsData.length > 0) {
      //   endDirectionsData.forEach((direction) => {
      //     printPolyline(direction, map, "red");
      //   });
      // }

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

    // 정류장을 클릭했다면(busStationPos에 데이터가 할당되었다면)
    if (busStationPos.name) {
      // // 사용자가 지정한 지도의 레벨, 좌표를 얻어옴
      // let newMapInfo = {
      //   ...mapInfo,
      //   level: 5,
      //   centerY: busStationPos.pos[0],
      //   centerX: busStationPos.pos[1],
      // };
      // // 마운트 되기 전 map 확대 및 이동 위치
      // setMapInfo(newMapInfo);
      // console.log(busStationPos);
      // console.log(newMapInfo);
      // 클릭한 버스 정류장 마커 만들기

      const stationMarker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          busStationPos.pos[0],
          busStationPos.pos[1]
        ),
      });
      // 클릭한 버스 정류장 마커 print
      stationMarker.setMap(map);

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

      // 인포윈도우 표시 위치
      const iwPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

      // 인포윈도우를 생성합니다
      var infowindow = new window.kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, stationMarker);
    }

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

  // 현재 위치 좌표 가져오기
  useEffect(() => {
    getCurrentPosition();
  }, []);

  // 카카오맵 및 마커 프린트
  useEffect(() => {
    // directionsData에 데이터가 할당되고 Maps 컴포넌트가 존재할 때
    if (kakaoMap.current) {
      printKakaomap(curPos[0], curPos[1]);
    }
  }, [position, busStationPos, curPos]);

  useEffect(() => {
    // Map 컴포넌트가 언마운트되면 다시 isMapPrint를 false로 바꿈
    return () => {
      setIsMapPrint(false);
    };
  }, [setIsMapPrint]);

  return <Maps ref={kakaoMap}></Maps>;
}

export default Map;
