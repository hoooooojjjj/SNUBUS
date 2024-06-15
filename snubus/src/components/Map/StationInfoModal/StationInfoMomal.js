import React, { useEffect, useState } from "react";

const StationInfoModal = ({ curStation, busStationInfos }) => {
  // 현재 클릭한 정류장에 버스 도착까지 남은 시간 & 막차 여부
  const [busesToCurStation, setBusesToCurStation] = useState({
    // 첫번째 버스
    firstComing: {
      // 남은 시간
      remainingTime: "",
      // 막차 여부 (0 : 막차 아님 1 : 막차)
      isLast: 0,
    },
    // 두번째 버스
    secondComing: {
      // 남은 시간
      remainingTime: "",
      // 막차 여부 (0 : 막차 아님 1 : 막차)
      isLast: 0,
    },
  });
  useEffect(() => {
    // 해당 버스 정류장에 관련 정보
    const getCurStationInfo = () => {
      // 중앙대학교 방면이라면
      if (curStation.Direction === true) {
        // 중앙대학교 방면 정류장들 정보 중 이름(busStationInfo.stNm)과 현재 클릭한 정류장 이름(curStation.name)이 같은 것만 필터링
        const busToCurStation = busStationInfos.DirectionToStart.filter(
          (busStationInfo) => busStationInfo.stNm === curStation.name
        );

        // 현재 클릭한 정류장에 관련 정보 객체
        const curStationInfo = {
          firstComing: {
            remainingTime: busToCurStation[0].arrmsg1,
            isLast: busToCurStation[0].isLast1,
          },
          secondComing: {
            remainingTime: busToCurStation[0].arrmsg2,
            isLast: busToCurStation[0].isLast2,
          },
        };

        //state에 업데이트
        setBusesToCurStation(curStationInfo);
      } else if (curStation.Direction === false) {
        // 신림2동차고지 방면이라면
        // 신림2동차고지 방면 정류장들 정보 중 이름(busStationInfo.stNm)과 현재 클릭한 정류장 이름(curStation.name)이 같은 것만 필터링
        const busToCurStation = busStationInfos.DirectionToEnd.filter(
          (busStationInfo) => busStationInfo.stNm === curStation.name
        );

        // 현재 클릭한 정류장에 관련 정보 객체
        const curStationInfo = {
          firstComing: {
            remainingTime: busToCurStation[0].arrmsg1,
            isLast: busToCurStation[0].isLast1,
          },
          secondComing: {
            remainingTime: busToCurStation[0].arrmsg2,
            isLast: busToCurStation[0].isLast2,
          },
        };

        //state에 업데이트
        setBusesToCurStation(curStationInfo);
      }
    };

    getCurStationInfo();
  }, []);

  return (
    <div>
      <h1>{curStation.name}</h1>
      <p>
        {busesToCurStation.firstComing.remainingTime}
        {busesToCurStation.firstComing.isLast === 1 ? " (막차)" : ""} |
        {busesToCurStation.secondComing.remainingTime}
        {busesToCurStation.firstComing.isLast === 1 ? " (막차)" : ""}
      </p>
    </div>
  );
};

export default StationInfoModal;
