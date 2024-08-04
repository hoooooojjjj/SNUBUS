import React, { useContext, useEffect, useState } from "react";
import Map from "../components/Map/Map";
import getBusAndStationData from "../api/busAndStationDataFetch";
import Loading from "../components/Loading/Loading";
import { Container, ViewWrap } from "./ViewStyle";
import { isMapPrintContext } from "../App";
import StationLine from "../components/Map/StationLine/StationLine";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Headers from "./components/Header";
import {
  skipToken,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const ViewContext = React.createContext();

// view 페이지
function View5511Bus({
  bus_stationData,
  getBuspostionXY,
  getBusInfo,
  getBuses,
  getStationToStart,
  getStationToEnd,
}) {
  // 현재 파라미터 받아와서 버스 번호 확인
  const { id } = useParams();

  // 버스 분류 state
  const [busClassification, setBusClassification] = useState({
    routeId: "",
    NumberOfStations: [],
  });

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

  // 클릭한 정류장의 도착 정보 state
  const [clickedStationInfo, setclickedStationInfo] = useState([]);

  // 폴리라인 끄고 키는 state
  const [isPolylinVisible, setIsPolylinVisible] = useState({
    isStart: true,
    visible: false,
  });

  // 버스 정보 업데이트 완료 유무
  const [isBusInfoUpdated, setIsBusInfoUpdated] = useState(true);

  // 현재 라우트에 따라 버스 분류해서 해당 버스 번호 정보 요청
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

  const queryClient = useQueryClient();

  // 리액트 쿼리로 버스 / 정류장 정보 데이터 fetching
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["getBusAndStationData"],
    queryFn: busClassification.routeId
      ? async ({ signal }) => {
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
        }
      : skipToken,
  });

  const mutation = useMutation({
    mutationFn: () =>
      busClassification.routeId
        ? async () => {
            // getBusAndStationData에게 버스 / 정류장 데이터 받기
            const busData = await getBusAndStationData(busClassification);
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
          }
        : skipToken,
    retry: 3,
    onSuccess: () => {
      // 채팅 기록 다시 fetch
      setIsBusInfoUpdated(false);
      queryClient.invalidateQueries("getBusAndStationData").then((res) => {
        setIsBusInfoUpdated(true);
      });
    },

    onError: (error) => {
      console.error("Error adding chat", error.message);
    },
  });

  return (
    <Container>
      {/* isMapPrint가 false일 때(카카오맵이 다 그려졌을 때) Loading 컴포넌트가 렌더링되고 true일 때 사라짐 */}
      <Loading display={isMapPrint ? "none" : "block"} />
      {/* isMapPrint가 false일 때(카카오맵이 다 그려졌을 때) Map 컴포넌트가 안보이고 true일 때 보이게 함 */}
      {/* 이렇게 해서 완전히 카카오맵이 다 그려지기 전까지는 로딩창을 띄우게 만듬 */}
      {bus_stationData.busDataReducer.busPositionXY ? (
        <ViewContext.Provider
          value={{
            busStationPos,
            setBusStationPos,
            isInfoWindowVisible,
            setIsInfoWindowVisible,
            clickedStationInfo,
            setclickedStationInfo,
            isPolylinVisible,
            setIsPolylinVisible,
          }}
        >
          {/* 데이터가 들어왔을 때 Map 컴포넌트 렌더링 */}
          <Headers isMain={false} />
          <ViewWrap>
            <Map mutation={mutation} isBusInfoUpdated={isBusInfoUpdated}></Map>
            {isMapPrint ? <StationLine /> : <></>}
          </ViewWrap>
        </ViewContext.Provider>
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
