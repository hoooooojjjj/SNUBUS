// 버스 관련 데이터 주기적 요청 함수
export default async function getBusAndStationData(busRouteId, signal) {
  // 버스 위치 정보 데이터 요청 함수 -> 버스 위치 정보 fetching
  const getBusData = async () => {
    // 데이터 요청
    try {
      const response = await fetch(
        `http://localhost:8080/proxy?url=${encodeURIComponent(
          `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=${busRouteId}&resultType=json`
        )}`,
        {
          cache: "no-cache",
          signal: signal, // signal 옵션 추가
        }
      );

      // 서버에서 json으로 응답 받기
      const busPosData = await response.json();

      // 데이터 요청 횟수 초과 시
      if (response.status === 429) {
        console.log("데이터 요청 횟수를 초과했습니다");
        // 빈 배열 리턴
        return {
          busPos: [],
          busInfo: [],
          DirectionToStart: [],
          DirectionToEnd: [],
        };
        // 운행 중인 버스가 없을 때
      } else if (response.status === 503) {
        console.log("운행 중인 버스가 없습니다.");
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
        const getPosBuses = busPosData.map((bus) => {
          return [bus.gpsY, bus.gpsX];
        });

        // 각 버스의 정보 (버스 ID, 차량번호, 차량유형, 제공시간)
        const getBusInfo = busPosData.map((bus) => {
          return {
            vehId: bus.vehId,
            plainNo: bus.plainNo,
            busType: bus.busType,
            dataTm: bus.dataTm,
          };
        });

        // 중앙대학교 방면 snubus 정류장 지나는 버스만 추출
        const busStationDirectionToStart = busPosData.filter(
          (busPos) =>
            parseInt(busPos.sectOrd) >= 4 && parseInt(busPos.sectOrd) <= 25
        );

        // 신림2동차고지 방면 snubus 정류장 지나는 버스만 출력
        const busStationDirectionToEnd = busPosData.filter(
          (busPos) =>
            parseInt(busPos.sectOrd) >= 51 && parseInt(busPos.sectOrd) <= 74
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
        return {
          busPos: [],
          busInfo: [],
          DirectionToStart: [],
          DirectionToEnd: [],
        };
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
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
        `http://localhost:8080/proxy?url=${encodeURIComponent(
          `http://ws.bus.go.kr/api/rest/arrive/getArrInfoByRouteAll?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=100100250&resultType=json`
        )}`
      );

      // 서버에서 json으로 응답 받기
      const busStationInfos = await response.json();

      if (response.status === 200) {
        // 중앙대학교 방면 정류장들 관련 정보 필터링
        const busStationName_start = busStationInfos.filter(
          (busStationInfo, i) => i >= 4 && i <= 25
        );

        // 신림2동차고지 방면 정류장들 관련 정보 필터링
        const busStationName_end = busStationInfos.filter(
          (busStationInfo, i) => i >= 51 && i <= 74
        );

        // 각 방면 정류장 정보 리턴
        return [busStationName_start, busStationName_end];
      } else {
        return [];
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // 버스 위치 정보 데이터 요청
  const BusData = await getBusData();
  if (!BusData) {
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

  //  정류장 정보 데이터 요청
  const StationData = await getStationData();
  if (StationData.length < 2) {
    return null;
  }

  // 응답 받은 새 정류장 데이터 저장하는 객체
  const NewStationData = {
    DirectionToStart: StationData[0],
    DirectionToEnd: StationData[1],
  };

  return {
    busData: NewBusData,
    stationData: NewStationData,
  };
}
