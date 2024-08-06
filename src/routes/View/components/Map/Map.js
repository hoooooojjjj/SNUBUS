import React, { useContext, useEffect, useState } from "react";
import { BusInfo, Container, DataTm, UpdateBtn, UpdateWrap } from "./MapStyle";
import { isMapPrintContext } from "../../../../App";
import { ViewContext } from "../ViewContextProvider";
import StationInfoModal from "./StationInfoModal/StationInfoModal";
import { RedoOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PrintMap from "./\bPrintMap/PrintMap";

// 현재 위치 좌표 가져오는 커스텀 훅
const useCurrentPosition = () => {
  // 현재 위치
  const [curPos, setCurPos] = useState([]);

  // 위치추적 허용/비허용 설정 여부
  const [setGeolocationPermit, setSetGeolocationPermit] = useState(
    sessionStorage.getItem("setGeolocationPermit")
  );

  // 현재 위치 좌표 가져오기
  const getCurrentPosition = () => {
    // HTML5의 geolocation으로 사용할 수 있는지 확인
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옴
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const curLat = position.coords.latitude; // 위도
          const curLlon = position.coords.longitude; // 경도
          setCurPos([curLat, curLlon]);
        },
        function (error) {
          // 위치추적 비허용시
          if (error.code === error.PERMISSION_DENIED) {
            // 이전에 위치추적 설정 안했으면 alert 띄우기
            if (setGeolocationPermit === null) {
              sessionStorage.setItem("setGeolocationPermit", "true");
              setSetGeolocationPermit(true);
              alert(`위치 추적을 허용하지 않으시면,
              현재 위치가 서울대학교 정류장으로 표시됩니다.`);
            }

            setCurPos([37.46674146, 126.9479523]);
          }
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때
      alert(`현재 브라우저는 위치 추적을 지원하지 않습니다,
  현재 위치가 서울대학교 정류장으로 표시됩니다.`);
      setCurPos([37.46674146, 126.9479523]);
    }
  };

  return { curPos, getCurrentPosition };
};

// 버스제공 평균 시간 계산 커스텀 훅
const useCalculateAvgDataTm = (busInfo) => {
  // 버스 데이터 제공 시각
  const [dataTm, setDataTm] = useState(0);

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

  return { dataTm, calculateAvgDataTm };
};

function Map({ mutation, bus_stationData, isBusInfoUpdated }) {
  // 현재 파라미터 받아와서 버스 번호 확인
  const { id } = useParams();

  // 클릭한 버스의 관련 정보(버스 ID, 차량번호, 차량유형, 제공시간) state
  const [clickedBusInfo, setClickedBusInfo] = useState({});

  // 버스 관련 정보 열고 닫는 state
  const [isBusInfoVisible, setIsBusInfoVisible] = useState(false);

  // 카카오맵이 화면에 표시됐는지 판별하는 context
  const [isMapPrint, setIsMapPrint] = useContext(isMapPrintContext);

  // view 페이지에서 받아온 context
  const {
    // infoWindow 열고 닫는 context
    isInfoWindowVisible,
    // 클릭한 버스 정류장 정류 받아오는 context
    clickedStationInfo,
  } = useContext(ViewContext);

  // 각 버스 관련 정보(버스 ID, 차량번호, 차량유형, 제공시간) state
  const busInfo = bus_stationData.busDataReducer.busInfo;

  // 현재 위치 좌표 가져오는 커스텀 훅
  const { curPos, getCurrentPosition } = useCurrentPosition();

  // 버스제공시간 평균 계산 커스텀 훅
  const { dataTm, calculateAvgDataTm } = useCalculateAvgDataTm(busInfo);

  // 맵 컴포넌트가 처음 마운트 되었을 때
  useEffect(() => {
    // 현재 위치 좌표 가져오기
    getCurrentPosition();
    // 버스 제공시간 평균 계산
    calculateAvgDataTm();
  }, []);

  return (
    <Container isInfoWindowVisible={isInfoWindowVisible}>
      {isMapPrint ? (
        <UpdateWrap>
          {" "}
          <DataTm>데이터 제공 시간 : {dataTm}</DataTm>
          <UpdateBtn
            isBusInfoUpdated={isBusInfoUpdated}
            onClick={() => {
              // 클릭하면 버스 관련 정보 요청
              mutation.mutate();
              // 현재 위치 다시 가져오기
              getCurrentPosition();
              // 제공 시간 계산
              calculateAvgDataTm();
            }}
          >
            <RedoOutlined />
          </UpdateBtn>
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
      <PrintMap
        id={id}
        curPos={curPos}
        setClickedBusInfo={setClickedBusInfo}
        setIsMapPrint={setIsMapPrint}
        setIsBusInfoVisible={setIsBusInfoVisible}
      />
    </Container>
  );
}

// 상태를 props로 매핑
function mapStateToProps(state) {
  return { bus_stationData: state };
}

export default connect(mapStateToProps)(Map);
