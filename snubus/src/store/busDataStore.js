import { createStore, combineReducers } from "redux";

// 버스들 데이터 저장하는 상태(버스 위치 정보 api 응답)
const busData = {
  // 버스 좌표 데이터 저장하는 상태
  busPositionXY: null,
  // 각 버스 관련 정보(버스 ID, 차량번호, 차량유형, 제공시간)
  busInfo: {},
  // 버스가 어느 정류장에 있는지 저장하는 상태
  busPositionInStation: {
    DirectionToStart: [],
    DirectionToEnd: [],
  },
};

// 각 정류장 관련 정보 저장하는 state(버스 도착 정보 api 응답)
const stationData = {
  // 중앙대학교 방면 정류장 정보
  DirectionToStart: [],
  // 신림2동차고지 방면 정류장 정보
  DirectionToEnd: [],
};

// 버스 데이터 관련 리듀서
function busDataReducer(state = busData, action) {
  switch (action.type) {
    case "GET_BUSPOSITION_XY":
      return { ...state, busPositionXY: action.data };
    case "GET_BUSINFO":
      return { ...state, busInfo: action.data };
    case "GET_BUS_STATION":
      return {
        ...state,
        busPositionInStation: {
          DirectionToStart: action.data.start,
          DirectionToEnd: action.data.end,
        },
      };
    default:
      return state;
  }
}

// 정류장 데이터 관련 리듀서
function stationDataReducer(state = stationData, action) {
  switch (action.type) {
    case "GET_STATION_STATIONSTART":
      return { ...state, DirectionToStart: action.data };
    case "GET_STATION_STATIONEND":
      return { ...state, DirectionToEnd: action.data };
    default:
      return state;
  }
}

// 리듀서 합치기
const rootReducer = combineReducers({
  busDataReducer,
  stationDataReducer,
});

// 스토어 생성
const store = createStore(rootReducer);

export default store;
