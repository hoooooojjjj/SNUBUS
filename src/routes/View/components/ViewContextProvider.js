import React, { useEffect, useState } from "react";

export const ViewContext = React.createContext();

// fetch까지 남은 시간 custom hook
function useLeftTime(isFetching) {
  // fetch까지 남은 시간 state
  const [timeLeft, setTimeLeft] = useState(null);

  // fetch 완료 여부 state
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    // fetch setInterval 함수 저장하는 변수
    let intervalId;

    // fetch까지 남은 시간 계산
    let fetchInterval;

    // fetching 중이면
    if (isFetching) {
      // fetch까지 남은 시간 15초로 설정
      fetchInterval = 15;
      // timeLeft state에 refetchInterval 저장
      setTimeLeft(fetchInterval);
      // fetch 여부 true로 설정
      setIsFetch(true);
      // fetching 중이 아니면
    } else if (isFetch) {
      // 1초 간격으로 timeLeft state 업데이트
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          // timeLeft이 1이면 fetchInterval로 설정
          if (prevTime === 1) {
            return fetchInterval;
          }
          // timeLeft이 1보다 크면 1초씩 감소
          return prevTime - 1;
        });
      }, 1000);
    }
    // 컴포넌트 언마운트 시 clearInterval
    return () => clearInterval(intervalId);
  }, [isFetching, isFetch]);

  return timeLeft;
}

// 버스 정류장 좌표, InfoWindow 열고 닫는 state, 클릭한 정류장의 도착 정보 state, 폴리라인 끄고 키는 state를 관리하는 컨텍스트 프로바이더 컴포넌트
function ViewContextProvider({ children, isFetching }) {
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

  const timeLeft = useLeftTime(isFetching);

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
        timeLeft,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export default ViewContextProvider;
