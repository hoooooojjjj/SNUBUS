// 버스 관련 데이터 주기적 요청 함수
export default async function getBusAndStationData(busClassification, signal) {
  // 버스 위치 정보 데이터 요청 함수 -> 버스 위치 정보 fetching
  const getBusData = async () => {
    // 데이터 요청
    try {
      const response = await fetch(
        `http://3.39.139.237/api/busData?routeId=${
          busClassification.routeId
        }&busClassification=${JSON.stringify(busClassification)}`,
        // signal이 존재하면, signal을 추가하고 아니면 추가하지 않음
        signal
          ? {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              cache: "no-cache",
              signal: signal, // signal 옵션 추가
            }
          : {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              cache: "no-cache",
            }
      );

      // 데이터 요청 횟수 초과 시
      if (response.status === 429) {
        alert(
          "금일 데이터 요청 횟수를 초과했습니다. 내일 다시 이용해주세요. 죄송합니다."
        );
        // 빈 배열 리턴
        return {
          busPos: [],
          busInfo: [],
          DirectionToStart: [],
          DirectionToEnd: [],
        };
        // 운행 중인 버스가 없을 때
      } else if (response.status === 503) {
        //빈 배열 리턴
        return {
          busPos: [],
          busInfo: [],
          DirectionToStart: [],
          DirectionToEnd: [],
        };
        // 데이터가 정상적으로 처리되었다면
      } else if (response.status === 200) {
        // 서버에서 json으로 응답 받기
        const busData = await response.json();

        return {
          // 버스 좌표 배열
          busPos: busData.getPosBuses,
          busInfo: busData.getBusInfo,
          // 중앙대학교 방면 snubus 정류장에 위치한 버스들 배열
          DirectionToStart: busData.busStationDirectionToStart,
          // 신림2동차고지 방면 snubus 정류장에 위치한 버스들 배열
          DirectionToEnd: busData.busStationDirectionToEnd,
        };
      } else {
        alert(
          "예기치못한 오류로 인해 버스 정보가 들어오지 못했습니다. 다시 시도해주세요."
        );
        return null;
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted. Trying again...");
      } else {
        console.error("Fetch error:", error);
      }
      return null;
    }
  };

  // 버스 도착 정보 데이터 요청 함수 -> 각 정류장 관련 정보 fetching
  const getStationData = async () => {
    // 데이터 요청
    try {
      const response = await fetch(
        `http://3.39.139.237/api/stationData?routeId=${
          busClassification.routeId
        }&busClassification=${JSON.stringify(busClassification)}`,
        // signal이 존재하면, signal을 추가하고 아니면 추가하지 않음
        signal
          ? {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              cache: "no-cache",
              signal: signal, // signal 옵션 추가
            }
          : {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              cache: "no-cache",
            }
      );

      // 데이터가 정상적으로 처리되었다면
      if (response.status === 200) {
        // 서버에서 json으로 응답 받기
        const busStationData = await response.json();

        // 각 방면 정류장 정보 리턴
        return [
          busStationData.busStationName_start,
          busStationData.busStationName_end,
        ];
      } else if (response.status === 429) {
        alert(
          "금일 데이터 요청 횟수를 초과했습니다. 내일 다시 이용해주세요. 죄송합니다."
        );
        return [];
      } else {
        alert(
          "예기치못한 오류로 인해 정류장 정보가 들어오지 못했습니다. 다시 시도해주세요."
        );
        return [];
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted. Trying again...");
      } else {
        console.error("Fetch error:", error);
      }
      return null;
    }
  };

  // 버스 위치 정보 데이터 요청
  const BusDataPromise = getBusData();
  // 정류장 정보 데이터 요청
  const StationDataPromise = getStationData();

  // 병렬 처리로 요청시간 단축
  const [BusData, StationData] = await Promise.all([
    BusDataPromise,
    StationDataPromise,
  ]);

  if (!BusData || !StationData) {
    return null;
  }

  // 응답 받은 새 버스 데이터 저장하는 객체
  const NewBusData = {
    busPositionXY: BusData.busPos,
    busInfo: BusData.busInfo,
    busPositionInStation: {
      DirectionToStart: BusData.DirectionToStart,
      DirectionToEnd: BusData.DirectionToEnd,
    },
  };

  // 응답 받은 새 정류장 데이터 저장하는 객체체
  const NewStationData = {
    DirectionToStart: StationData[0],
    DirectionToEnd: StationData[1],
  };

  return {
    busData: NewBusData,
    stationData: NewStationData,
  };
}
