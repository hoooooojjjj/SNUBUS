import React, { useEffect } from "react";

const StationInfoModal = ({ curStation, busStationInfos }) => {
  useEffect(() => {
    // 해당 버스 정류장에 버스 도착까지 남은 시간 가져오기
    const getRemainingTime = () => {
      // 중앙대학교 방면이라면
      if (curStation.Direction === true) {
        // 중앙대학교 방면 정류장들 정보 중 이름(busStationInfo.stNm)과 현재 클릭한 정류장 이름(curStation.name)이 같은 것만 필터링
        const remainingTime = busStationInfos.DirectionToStart.filter(
          (busStationInfo) => busStationInfo.stNm === curStation.name
        );

        // 현재 클릭한 정류장에 버스 도착까지 남은 시간
        console.log(remainingTime[0].arrmsg1, remainingTime[0].arrmsg2);
      } else if (curStation.Direction === false) {
        // 신림2동차고지 방면이라면
        // 신림2동차고지 방면 정류장들 정보 중 이름(busStationInfo.stNm)과 현재 클릭한 정류장 이름(curStation.name)이 같은 것만 필터링
        const remainingTime = busStationInfos.DirectionToEnd.filter(
          (busStationInfo) => busStationInfo.stNm === curStation.name
        );

        // 현재 클릭한 정류장에 버스 도착까지 남은 시간
        console.log(remainingTime[0].arrmsg1, remainingTime[0].arrmsg2);
      }
    };

    getRemainingTime();
  }, []);

  return <div>{curStation.name}</div>;
};

export default StationInfoModal;
