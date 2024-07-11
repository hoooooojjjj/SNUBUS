// 버스 관련 데이터 주기적 요청 함수
export default async function getBusAndStationData(
  busClassification,
  controller
) {
  const signal = controller?.signal;

  // 버스 위치 정보 데이터 요청 함수 -> 버스 위치 정보 fetching
  const getBusData = async () => {
    // 데이터 요청
    try {
      const response = await fetch(
        `https://convenient-arlene-sono12-78cd3ebf.koyeb.app/proxy?url=${encodeURIComponent(
          `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=${busClassification.routeId}&resultType=json`
        )}`,
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

      // 서버에서 json으로 응답 받기
      const busData = await response.json();

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
        // 각 버스의 위치 좌표 리턴
        const getPosBuses = busData.map((bus) => {
          return [bus.gpsY, bus.gpsX];
        });

        // 각 버스의 정보 (버스 ID, 차량번호, 차량유형, 제공시간)
        const getBusInfo = busData.map((bus) => {
          return {
            vehId: bus.vehId,
            plainNo: bus.plainNo,
            busType: bus.busType,
            dataTm: bus.dataTm,
          };
        });

        // 중앙대학교 방면 snubus 정류장 지나는 버스만 추출
        const busStationDirectionToStart = busData.filter(
          (busPos) =>
            parseInt(busPos.sectOrd) >=
              busClassification.NumberOfStations.start[0] &&
            parseInt(busPos.sectOrd) <=
              busClassification.NumberOfStations.start[1]
        );

        // 신림2동차고지 방면 snubus 정류장 지나는 버스만 출력
        const busStationDirectionToEnd = busData.filter(
          (busPos) =>
            parseInt(busPos.sectOrd) >=
              busClassification.NumberOfStations.end[0] &&
            parseInt(busPos.sectOrd) <=
              busClassification.NumberOfStations.end[1]
        );

        return {
          // 버스 좌표 배열
          busPos: getPosBuses,
          busInfo: getBusInfo,
          // 중앙대학교 방면 snubus 정류장에 위치한 버스들 배열
          DirectionToStart: busStationDirectionToStart,
          // 신림2동차고지 방면 snubus 정류장에 위치한 버스들 배열
          DirectionToEnd: busStationDirectionToEnd,
        };
      } else {
        alert(
          "예기치못한 오류로 인해 버스 정보가 들어오지 못했습니다. 다시 시도해주세요."
        );
        return {
          busPos: [],
          busInfo: [],
          DirectionToStart: [],
          DirectionToEnd: [],
        };
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted. Trying again...");
      } else {
        console.error("Fetch error:", error);
      }
    }
  };

  // 버스 도착 정보 데이터 요청 함수 -> 각 정류장 관련 정보 fetching
  const getStationData = async () => {
    // 데이터 요청
    try {
      const response = await fetch(
        `https://convenient-arlene-sono12-78cd3ebf.koyeb.app/proxy?url=${encodeURIComponent(
          `http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRouteAll?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=${busClassification.routeId}&resultType=json`
        )}`,
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

      // 서버에서 json으로 응답 받기
      const busStationData = await response.json();

      if (response.status === 200) {
        // 중앙대학교 방면 정류장들 관련 정보 필터링
        const busStationName_start = busStationData.filter(
          (busStationInfo, i) =>
            i >= busClassification.NumberOfStations.start[0] &&
            i <= busClassification.NumberOfStations.start[1]
        );

        // 신림2동차고지 방면 정류장들 관련 정보 필터링
        const busStationName_end = busStationData.filter(
          (busStationInfo, i) =>
            i >= busClassification.NumberOfStations.end[0] &&
            i <= busClassification.NumberOfStations.end[1]
        );

        // 각 방면 정류장 정보 리턴
        return [busStationName_start, busStationName_end];
      } else if (response.status === 429) {
        alert(
          "금일 데이터 요청 횟수를 초과했습니다. 내일 다시 이용해주세요. 죄송합니다."
        );
        return [];
      } else {
        alert(
          "예기치못한 오류로 인해 버스 정보가 들어오지 못했습니다. 다시 시도해주세요."
        );
        return [];
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted. Trying again...");
      } else {
        console.error("Fetch error:", error);
      }
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
