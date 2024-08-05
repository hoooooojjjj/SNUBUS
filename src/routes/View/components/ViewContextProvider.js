import React, { useState } from "react";

export const ViewContext = React.createContext();

// 버스 정류장 좌표, InfoWindow 열고 닫는 state, 클릭한 정류장의 도착 정보 state, 폴리라인 끄고 키는 state를 관리하는 컨텍스트 프로바이더 컴포넌트
function ViewContextProvider({ children }) {
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

  return (
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
      {children}
    </ViewContext.Provider>
  );
}

export default ViewContextProvider;
