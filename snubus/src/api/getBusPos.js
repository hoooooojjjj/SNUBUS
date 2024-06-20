// 버스 관련 데이터 주기적 요청 함수
export default async function getBusData(busRouteId, setBusData, signal) {
  // 버스 위치 정보 데이터 요청 함수 -> 버스 위치 정보 fetching
  const getBusPosData = async () => {
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
          DirectionToStart: [],
          DirectionToEnd: [],
        };
        // 운행 중인 버스가 없을 때
      } else if (response.status === 503) {
        console.log("운행 중인 버스가 없습니다.");
        //빈 배열 리턴
        return {
          busPos: [],
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
        return [];
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
  const getBusStationInfo = async () => {
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

  // 처음 마운트되었을 때 받은 새 버스 데이터 저장하는 객체
  const NewBusData = {
    // 버스들 데이터 저장하는 상태
    busInfos: {
      // 버스 좌표 데이터 저장하는 상태
      busPositionXY: null,
      // 각 버스 관련 정보(버스 ID, 차량번호, 차량유형, 제공시간)
      busInfo: {},
      // 버스가 어느 정류장에 있는지 저장하는 상태
      busPositionInStation: {
        DirectionToStart: [],
        DirectionToEnd: [],
      },
    },
    // 각 정류장 관련 정보 저장하는 state
    busStationInfos: {
      // 중앙대학교 방면 정류장 정보
      DirectionToStart: [],
      // 신림2동차고지 방면 정류장 정보
      DirectionToEnd: [],
    },
  };

  // 처음 마운트되었을 때 버스 위치 정보 데이터 요청
  const BusPosData = await getBusPosData();
  if (!BusPosData) {
    return null;
  }

  // 버스 좌표 배열 BusPosData에 state 업데이트
  NewBusData.busInfos.busPositionXY = BusPosData.busPos;

  // 각 버스 관련 정보 BusPosData에 state 업데이트
  NewBusData.busInfos.busInfo = BusPosData.busInfo;

  // snubus 정류장에 위치한 버스 배열 BusPosData에 state 업데이트
  NewBusData.busInfos.busPositionInStation.DirectionToStart =
    BusPosData.DirectionToStart;
  NewBusData.busInfos.busPositionInStation.DirectionToEnd =
    BusPosData.DirectionToEnd;

  // 처음 마운트되었을 때 버스 도착 정보 데이터 요청
  const BusStationInfo = await getBusStationInfo();
  if (BusStationInfo.length < 2) {
    return null;
  }
  NewBusData.busStationInfos.DirectionToStart = BusStationInfo[0];
  NewBusData.busStationInfos.DirectionToEnd = BusStationInfo[1];

  // state에 NewBusData 업데이트
  setBusData(NewBusData);
}
