import React, { useContext, useEffect, useRef, useState } from "react";
import {
  BusInfo,
  Container,
  DataTm,
  Maps,
  UpdateBtn,
  UpdateWrap,
} from "./MapStyle";
import { isMapPrintContext } from "../../App";
import { ViewContext } from "../../routes/View";
import StationInfoModal from "./StationInfoModal/StationInfoModal";
import { RedoOutlined } from "@ant-design/icons";
import { route_start, route_end } from "../../util/busStationPos";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Map({ getData, bus_stationData }) {
  // 현재 파라미터 받아와서 버스 번호 확인
  const { id } = useParams();

  // kakaomap이 있는 요소의 ref
  const kakaoMap = useRef();

  /* state 코드 */

  // 현재 위치
  const [curPos, setCurPos] = useState([]);

  // 마운트 되기 전 map 확대 및 이동 위치 가져오기
  const [mapInfo, setMapInfo] = useState({
    level: "",
    centerY: "",
    centerX: "",
  });

  // 클릭한 버스의 관련 정보(버스 ID, 차량번호, 차량유형, 제공시간) state
  const [clickedBusInfo, setClickedBusInfo] = useState({});

  // 버스 관련 정보 열고 닫는 state
  const [isBusInfoVisible, setIsBusInfoVisible] = useState(false);

  // 버스 데이터 제공 시각
  const [dataTm, setDataTm] = useState(0);

  // 업데이트 버튼 클릭 여부 state
  const [updateBtnAnimate, setUpdateBtnAnimate] = useState(false);

  /* Context API 코드 */

  // 카카오맵이 화면에 표시됐는지 판별하는 context
  const [isMapPrint, setIsMapPrint] = useContext(isMapPrintContext);

  // view 페이지에서 받아온 context
  const {
    // 클릭한 버스 정류장 좌표 받아오는 context
    busStationPos,
    // infoWindow 열고 닫는 context
    isInfoWindowVisible,
    // 클릭한 버스 정류장 정류 받아오는 context
    clickedStationInfo,
    setclickedStationInfo,
    // 폴리라인 끄고 키는 state
    isPolylinVisible,
  } = useContext(ViewContext);

  /* redux 코드 */

  // 버스 위치 좌표 데이터 state
  const position = bus_stationData.busDataReducer.busPositionXY;

  // 각 버스 관련 정보(버스 ID, 차량번호, 차량유형, 제공시간) state
  const busInfo = bus_stationData.busDataReducer.busInfo;

  // 버스 정류장 관련 정보 state
  const busStationInfos = bus_stationData.stationDataReducer;

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
      alert("현재 위치를 표시하기 위해 위치 정보 제공을 허용해주세요");
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
        level: mapInfo.level || 3, //지도의 레벨(확대, 축소 정도)
      };
      const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
      const mapTypeControl = new window.kakao.maps.MapTypeControl();

      // 지도에 지도타입 컨트롤을 추가
      map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPLEFT);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
      const zoomControl = new window.kakao.maps.ZoomControl();

      // 지도에 줌 컨트롤을 추가
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.LEFT);

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
      ImageSize = new window.kakao.maps.Size(40), // 마커이미지의 크기
      ImageOption = { offset: new window.kakao.maps.Point(20, 35) };

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성
    const markerImage = new window.kakao.maps.MarkerImage(
      ImageSrc,
      ImageSize,
      ImageOption
    );

    // 마커 이미지 리턴
    return markerImage;
  };

  const printPolyline = (directionsData, map, strokeColor) => {
    // 버스 노선 경로 좌표 배열
    const stationPosArray = [
      directionsData.map(
        (direction) => new window.kakao.maps.LatLng(direction[1], direction[0])
      ),
    ];

    // 버스 노선 경로 좌표 배열로 폴리라인 생성
    const polyline = new window.kakao.maps.Polyline({
      map: map,
      path: stationPosArray,
      strokeWeight: 10,
      strokeColor: strokeColor,
      strokeOpacity: 1,
      strokeStyle: "solid",
    });

    // 폴리라인 적용
    polyline.setMap(map);
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
    busMarkers.forEach((marker, i) => {
      marker.setMap(map); // 클러스터러를 만들지 않고 마커 생성

      // 마커에 마우스 오버 이벤트 등록
      window.kakao.maps.event.addListener(marker, "mouseover", function () {
        // 마우스 오버한 동안 버스 정보 보이게
        setIsBusInfoVisible(true);
        // busType(차량 유형)은 데이터 전처리 후
        // 마우스 오버한 버스의 정보 state update
        switch (busInfo[i].busType) {
          case "0":
            setClickedBusInfo({ ...busInfo[i], busType: "일반버스" });
            break;
          case "1":
            setClickedBusInfo({ ...busInfo[i], busType: "저상버스" });
            break;
          case "2":
            setClickedBusInfo({ ...busInfo[i], busType: "굴절버스" });
            break;
          default:
            break;
        }
      });

      // 마커에 마우스 아웃 이벤트 등록
      window.kakao.maps.event.addListener(marker, "mouseout", function () {
        // 마우스 아웃하면 버스 정보 제거
        setIsBusInfoVisible(false);
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
      //  정류장을 클릭하면 지도 레벨 3으로
      map.setLevel(3);

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

      setclickedStationInfo(curStation);

      let contentStyle =
        "display: inline-block; text-align: center; height: auto; width: auto; padding: 4px 10px 2px 10px; margin-bottom: 110px; font-size: 20px; background-color:white; border:1px solid black; border-radius: 10px; box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);";

      // 반응형 스타일링
      if (window.matchMedia("(max-width: 1024px)").matches) {
        contentStyle += "font-size: 16px;";
      }
      if (window.matchMedia("(max-width: 768px)").matches) {
        contentStyle += "font-size: 14px; margin-bottom: 100px;";
      }

      // 커스텀 오버레이 컨텐츠
      const content = `<span style="${contentStyle}">${curStation[0].stNm}</span>`;

      // 커스텀 오버레이가 표시될 위치
      const OverlayPosition = new window.kakao.maps.LatLng(
        busStationPos.pos[0],
        busStationPos.pos[1]
      );

      // 커스텀 오버레이를 생성
      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: OverlayPosition,
        content: content,
      });

      // 마커 위에 커스텀 오버레이를 표시
      customOverlay.setMap(map, stationMarker);

      // 클릭한 버스 정류장 마커 print
      stationMarker.setMap(map);

      // 모달에서 X버튼 클릭시 모달과 커스텀 오버레이, 마커 닫힘
      if (!isInfoWindowVisible) {
        customOverlay.setMap(null);
        stationMarker.setMap(null);
        // 클릭한 정류장 좌표로 중심좌표 이동 풀기
        map.setCenter(
          new window.kakao.maps.LatLng(mapInfo.centerY, mapInfo.centerX)
        );
      }
    }

    // 각 방면마다
    if (isPolylinVisible.isStart) {
      // 폴라라인 켜는 버튼 클릭하면
      if (isPolylinVisible.visible) {
        //   좌표 폴리라인 생성
        route_start[id].forEach((direction) => {
          printPolyline(direction, map, "#0c8ce9");
        });
      }
    } else {
      // 폴라라인 켜는 버튼 클릭하면
      if (isPolylinVisible.visible) {
        //  폴리라인 생성
        route_end[id].forEach((direction) => {
          printPolyline(direction, map, "#5D56E3");
        });
      }
    }
  };

  // 버스제공시간 평균 계산 함수
  const calculateAvgDataTm = () => {
    // 버스제공시간(예. '20240620205039')을 Date 객체로 변환하는 함수
    const parseTimeString = (timeString) => {
      const year = parseInt(timeString.slice(0, 4));
      const month = parseInt(timeString.slice(4, 6)) - 1;
      const day = parseInt(timeString.slice(6, 8));
      const hour = parseInt(timeString.slice(8, 10));
      const minute = parseInt(timeString.slice(10, 12));
      const second = parseInt(timeString.slice(12, 14));
      return new Date(year, month, day, hour, minute, second);
    };

    // 버스 제공시간 평균 계산
    const getAverageTime = (timeStrings) => {
      // 모든 시간 문자열을 Date 객체로 변환
      const dates = timeStrings.map(parseTimeString);

      // 모든 초 단위 값을 더하고, 그 합을 배열의 길이로 나누어 평균 초 값을 계산
      const totalSeconds = dates.reduce(
        (total, date) => total + date.getTime() / 1000,
        0
      );
      const avgSeconds = totalSeconds / dates.length;

      // 평균 초 값을 다시 Date 객체로 변환
      const avgDate = new Date(avgSeconds * 1000);
      return avgDate;
    };

    // 평균 버스제공시간 Date 객체를 'YYYY/MM/DD HH:MM:SS'형식의 문자열로 변환
    const formatDate = (date) => {
      // 무조건 두 자릿수로 표현되도록
      const pad = (num) => num.toString().padStart(2, "0");

      // YYYY/MM/DD HH:MM:SS'형식의 문자열로 변환
      const year = date.getFullYear();
      const month = pad(date.getMonth() + 1);
      const day = pad(date.getDate());
      const hour = pad(date.getHours());
      const minute = pad(date.getMinutes());
      const second = pad(date.getSeconds());
      return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
    };

    if (busInfo.length > 0) {
      const avgDate = getAverageTime(busInfo.map((bus) => bus.dataTm));

      const avgTimeString = formatDate(avgDate);

      setDataTm(avgTimeString);
    }
  };

  // 업데이트 버튼 클릭 시 UpdateBtnAnimate를 0.5초동안 true로
  const handleUpdateBtnClick = () => {
    setUpdateBtnAnimate(true);
    // 애니메이션 리셋
    setTimeout(() => setUpdateBtnAnimate(false), 500);
  };

  /* useEffect() 코드 */

  // 맵 컴포넌트가 처음 마운트 되었을 때
  useEffect(() => {
    // 현재 위치 좌표 가져오기
    getCurrentPosition();
    // 버스 제공시간 평균 계산
    calculateAvgDataTm();
  }, []);

  // 카카오맵 및 마커 프린트
  useEffect(() => {
    //  Maps 컴포넌트가 존재할 때
    if (kakaoMap.current && curPos.length) {
      // 카카오맵 그리기
      printKakaomap();
    }
  }, [position, curPos, busStationPos, isInfoWindowVisible, isPolylinVisible]);

  useEffect(() => {
    // Map 컴포넌트가 언마운트되면 다시 isMapPrint를 false로 바꿈
    return () => {
      setIsMapPrint(false);
    };
  }, []);

  return (
    <Container isInfoWindowVisible={isInfoWindowVisible}>
      {isMapPrint ? (
        <UpdateWrap>
          <UpdateBtn
            animate={updateBtnAnimate}
            onClick={() => {
              // 클릭하면 버스 관련 정보 요청
              getData();
              // 현재 위치 다시 가져오기
              getCurrentPosition();
              // 제공 시간 계산
              calculateAvgDataTm();
              // 클릭 시 updateBtnAnimate가 0.5초 동안 true로 바뀌어 0.5초 간 애니메이션 실행
              handleUpdateBtnClick();
            }}
          >
            <RedoOutlined />
          </UpdateBtn>
          <DataTm>데이터 제공 시간 : {dataTm}</DataTm>
        </UpdateWrap>
      ) : (
        <></>
      )}
      {clickedBusInfo.vehId && isBusInfoVisible ? (
        <BusInfo>
          차량 정보 = 버스 ID : {clickedBusInfo.vehId} | 차량 번호 :{" "}
          {clickedBusInfo.plainNo} | 차량 유형 : {clickedBusInfo.busType}
        </BusInfo>
      ) : (
        <></>
      )}
      {clickedStationInfo.length > 0 &&
      !window.matchMedia("(max-width: 550px)").matches ? (
        <StationInfoModal curStation={clickedStationInfo} />
      ) : (
        <></>
      )}
      <Maps ref={kakaoMap}></Maps>
    </Container>
  );
}

// 상태를 props로 매핑
function mapStateToProps(state) {
  return { bus_stationData: state };
}

export default connect(mapStateToProps)(Map);
