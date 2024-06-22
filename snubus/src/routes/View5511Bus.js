import React, { useContext, useEffect, useState } from "react";
import Map from "../components/Map/Map";
import getBusData from "../api/getBusPos";
import Loading from "../components/Loading/Loading";
import { Container } from "./ViewStyle";
import { isMapPrintContext } from "../App";
import StationLine from "../components/Map/StationLine/StationLine";
import { connect } from "react-redux";

const BUSROUTEID_5511 = "100100250";

// 버스 정류장 좌표 state 전달하는 contextAPI
export const busStationPosContext = React.createContext();

// InfoWindow 열고 닫는 state 전달하는 contextAPI
export const isInfoWindowVisibleContext = React.createContext();

// 5511번 버스 페이지
function View5511Bus({
  bus_stationData,
  getBuspostionXY,
  getBusInfo,
  getBuses,
  getStationToStart,
  getStationToEnd,
}) {
  // 카카오맵이 화면에 표시됐는지 판별하는 state
  const [isMapPrint, setIsMapPrint] = useContext(isMapPrintContext);

  // 버스 정류장 좌표 state -> StationLine 컴포넌트에 있는 정류장을 클릭하면 클릭한 정류장 좌표가 저장 + 어느 방면인지도 저장
  const [busStationPos, setBusStationPos] = useState({
    name: "",
    pos: "",
    Direction: true,
  });

  // InfoWindow 열고 닫는 state
  const [isInfoWindowVisible, setIsInfoWindowVisible] = useState(false);

  // 버스 위치 정보 데이터 fetching 함수
  const getData = () => {
    // 새로운 AbortController 객체 인터페이스를 생성
    const controller = new AbortController();
    // DOM 요청과 통신하거나 취소하는데 사용되는 AbortSignal 객체 인터페이스
    const signal = controller.signal;

    // getBusData로 버스/정류장 데이터 요청
    getBusData(BUSROUTEID_5511, signal).then((res) => {
      // 버스/정류장 데이터를 받아와서 Redux에 저장
      getBuspostionXY(res.busData.busPositionXY);
      getBusInfo(res.busData.busInfo);
      getBuses(
        res.busData.busPositionInStation.DirectionToStart,
        res.busData.busPositionInStation.DirectionToEnd
      );
      getStationToStart(res.stationData.DirectionToStart);
      getStationToEnd(res.stationData.DirectionToEnd);
    });

    return () => {
      // DOM 요청이 완료되기 전에 취소한다. 이를 통해 fetch 요청, 모든 응답 Body 소비, 스트림을 취소할 수 있다.
      controller.abort(); // Fetch 요청 취소
    };
  };

  // 버스 위치 정보 데이터 fetching
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container style={{ overflow: "hidden" }}>
      {/* isMapPrint가 false일 때(카카오맵이 다 그려졌을 때) Loading 컴포넌트가 렌더링되고 true일 때 사라짐 */}
      <Loading display={isMapPrint ? "none" : "block"} />
      {/* isMapPrint가 false일 때(카카오맵이 다 그려졌을 때) Map 컴포넌트가 안보이고 true일 때 보이게 함 */}
      {/* 이렇게 해서 완전히 카카오맵이 다 그려지기 전까지는 로딩창을 띄우게 만듬 */}
      {bus_stationData.busDataReducer.busPositionXY ? (
        <busStationPosContext.Provider
          value={[busStationPos, setBusStationPos]}
        >
          <isInfoWindowVisibleContext.Provider
            value={[isInfoWindowVisible, setIsInfoWindowVisible]}
          >
            {/* 데이터가 들어왔을 때 Map 컴포넌트 렌더링 */}
            <div style={{ display: "flex" }}>
              <Map getData={getData}></Map>
              {isMapPrint ? <StationLine /> : <></>}
            </div>
          </isInfoWindowVisibleContext.Provider>
        </busStationPosContext.Provider>
      ) : (
        // 데이터가 안 들어왔을 때
        <></>
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

export default connect(mapStateToProps, mapdispatchToProps)(View5511Bus);
