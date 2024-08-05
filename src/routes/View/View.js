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

// 버스/정류장 데이터 fetching 커스텀 훅
const useBSQuery = (busClassification, reduxProps) => {
  // 리액트 쿼리로 버스 / 정류장 정보 데이터 fetching
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["getBusAndStationData"],
    queryFn: busClassification.routeId
      ? async ({ signal }) => getBSData(busClassification, signal, reduxProps)
      : skipToken,
  });

  return { isPending, isError, data, error };
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
  const { isPending, isError, error } = useBSQuery(
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
