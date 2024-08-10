import React, { useContext, useEffect, useState } from "react";
import getBusAndStationData from "./api/busAndStationDataFetch";
import Loading from "./components/Loading/Loading";
import { Container } from "./ViewStyle";
import { isMapPrintContext } from "../../App";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Headers from "../components/Header/Header";
import { skipToken, useQuery } from "@tanstack/react-query";
import ViewContextProvider from "./components/ViewContextProvider";
import MapAndStationLine from "./components/MapAndStationLine";

/* - View 컴포넌트
    - 이 컴포넌트가 하는 일 나열
        1. 현재 라우트에 따라 버스 분류해서 현재 버스 노선 정보 반환
            1. Hooks 기능으로 분리 → useBusClassification() 커스텀 훅으로 분리
        2. 마운트 시 버스/정류장 데이터 fetching 후 redux에 저장
            1. Hooks 기능으로 분리 → useBSQuery() 커스텀 훅으로 분리
        3. 카카오맵이 그려지기 전에는 Loading 컴포넌트 렌더링
            1. Component 기능으로 분리 →  Loading 컴포넌트
        4. 버스 정류장 좌표, InfoWindow 열고 닫는 state, 클릭한 정류장의 도착 정보 state, 폴리라인 끄고 키는 state를 관리하는 컨텍스트 프로바이더
            1. Component 기능으로 분리 →  ViewContextProvider 컴포넌트
        5. 지도와 정류장 라인을 렌더링 및 mutation 이벤트
            1. Component 기능으로 분리 →  MapAndStationLine 컴포넌트
                1. 업데이트 버튼 클릭 시 버스/정류장 데이터 mutate 후 redux에 저장
                    1. Hooks 기능으로 분리 → useBSMutation() 커스텀 훅으로 분리*/

// 버스 분류하는 커스텀 훅 -> 현재 라우트에 따라 버스 분류해서 현재 버스 노선 정보 반환
const useBusClassification = (id) => {
  // 버스 분류 state
  const [busClassification, setBusClassification] = useState({
    routeId: "",
    NumberOfStations: [],
  });

  // 현재 라우트에 따라 버스 분류해서 해당 버스 노선 정보 필터링
  useEffect(() => {
    switch (id) {
      case "5511":
        setBusClassification({
          routeId: "100100250",
          NumberOfStations: {
            start: [4, 25],
            end: [51, 74],
          },
        });
        break;
      case "5513":
        setBusClassification({
          routeId: "100100251",
          NumberOfStations: {
            start: [0, 12],
            end: [31, 43],
          },
        });
        break;
      case "5516":
        setBusClassification({
          routeId: "100100253",
          NumberOfStations: {
            start: [3, 18],
            end: [55, 72],
          },
        });
        break;
      case "관악02":
        setBusClassification({
          routeId: "120900008",
          NumberOfStations: {
            start: [0, 21],
            end: [22, 38],
          },
        });
        break;
      default:
        break;
    }
  }, [id]);

  return busClassification;
};

// 버스/정류장 데이터 fetching 함수
export const getBSData = async (busClassification, signal, reduxProps) => {
  const {
    getBuspostionXY,
    getBusInfo,
    getBuses,
    getStationToStart,
    getStationToEnd,
  } = reduxProps;

  // getBusAndStationData에게 버스 / 정류장 데이터 받기
  const busData = await getBusAndStationData(busClassification, signal);

  // 버스/정류장 데이터를 받아와서 Redux에 저장(state update)
  getBuspostionXY(busData.busData.busPositionXY);
  getBusInfo(busData.busData.busInfo);
  getBuses(
    busData.busData.busPositionInStation.DirectionToStart,
    busData.busData.busPositionInStation.DirectionToEnd
  );
  getStationToStart(busData.stationData.DirectionToStart);
  getStationToEnd(busData.stationData.DirectionToEnd);

  return busData;
};

// Refetch까지 남은 시간 컴포넌트
function LeftTime({ isRefetching }) {
  // 남은 시간 state
  const [timeLeft, setTimeLeft] = useState(null);

  // refetch 여부 state (initial fetch 일 때는 false)
  const [isRefetch, setIsRefetch] = useState(false);

  // refetch setInterval 함수 저장하는 변수
  let intervalId;

  // refetch까지 남은 시간 계산
  let refetchInterval;

  useEffect(() => {
    // refetching 중이면
    if (isRefetching) {
      // refetch까지 남은 시간 15초로 설정
      refetchInterval = 15;
      // timeLeft state에 refetchInterval 저장
      setTimeLeft(refetchInterval);
      // refetch 여부 true로 설정
      setIsRefetch(true);
      // refetching 중이 아니면
    } else if (isRefetch) {
      // 1초 간격으로 timeLeft state 업데이트
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          // timeLeft이 1이면 refetchInterval로 설정
          if (prevTime === 1) {
            return refetchInterval;
          }
          // timeLeft이 1보다 크면 1초씩 감소
          return prevTime - 1;
        });
      }, 1000);
    }
    // 컴포넌트 언마운트 시 clearInterval
    return () => clearInterval(intervalId);
  }, [isRefetching, refetchInterval]);

  return <p>{timeLeft}</p>;
}

// 버스/정류장 데이터 fetching 커스텀 훅
const useBSQuery = (busClassification, reduxProps) => {
  // 리액트 쿼리로 버스 / 정류장 정보 데이터 fetching
  const { isPending, isError, data, error, isRefetching } = useQuery({
    queryKey: ["getBusAndStationData"],
    queryFn: busClassification.routeId
      ? async ({ signal }) => getBSData(busClassification, signal, reduxProps)
      : skipToken,
    refetchInterval: 15000,
  });

  console.log(" isRefetching : " + isRefetching);

  return { isPending, isError, data, error, isRefetching };
};

// view 페이지 컴포넌트
function View({
  bus_stationData,
  getBuspostionXY,
  getBusInfo,
  getBuses,
  getStationToStart,
  getStationToEnd,
}) {
  // 리덕스에 저장된 액션들
  const reduxProps = {
    getBuspostionXY,
    getBusInfo,
    getBuses,
    getStationToStart,
    getStationToEnd,
  };

  // 현재 파라미터 받아와서 버스 번호 확인
  const { id } = useParams();

  // 현재 라우트에 따라 버스 분류해서 현재 "버스 노선 정보" 가져오기
  const busClassification = useBusClassification(id);

  // 카카오맵이 화면에 표시됐는지 판별하는 state
  const [isMapPrint, setIsMapPrint] = useContext(isMapPrintContext);

  // 마운트 시 버스/정류장 데이터 fetching 후 redux에 저장
  const { isPending, isError, error, isRefetching } = useBSQuery(
    busClassification,
    reduxProps
  );

  // 에러가 발생했을 때 에러 메시지 표시 (옵션)
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Loading display={isMapPrint ? "none" : "block"} />
      {/* 데이터가 들어왔을 때 Map 컴포넌트 렌더링 */}
      {!isPending && bus_stationData.busDataReducer.busPositionXY && (
        <ViewContextProvider>
          <Headers isMain={false} />
          <LeftTime isRefetching={isRefetching} />
          <MapAndStationLine
            busClassification={busClassification}
            isMapPrint={isMapPrint}
            reduxProps={reduxProps}
          />
        </ViewContextProvider>
      )}
    </Container>
  );
}

// 상태를 props로 매핑
function mapStateToProps(state) {
  return { bus_stationData: state };
}

// 액션(dispatch)를 props로 매핑
function mapdispatchToProps(dispatch) {
  return {
    getBuspostionXY: (buspostionXY) => {
      dispatch({ type: "GET_BUSPOSITION_XY", data: buspostionXY });
    },
    getBusInfo: (busInfo) => {
      dispatch({ type: "GET_BUSINFO", data: busInfo });
    },
    getBuses: (busesToStart, busesToEnd) => {
      dispatch({
        type: "GET_BUS_STATION",
        data: { start: busesToStart, end: busesToEnd },
      });
    },
    getStationToStart: (stationToStart) => {
      dispatch({ type: "GET_STATION_STATIONSTART", data: stationToStart });
    },
    getStationToEnd: (stationToEnd) => {
      dispatch({ type: "GET_STATION_STATIONEND", data: stationToEnd });
    },
  };
}

export default connect(mapStateToProps, mapdispatchToProps)(View);
