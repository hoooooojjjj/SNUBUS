// 버스 관련 데이터 주기적 요청 함수
export default async function getBusDataInterval(
  busRouteId,
  setBusData,
  signal
) {
  // 버스 위치 정보 데이터 요청 함수 -> 버스 위치 정보 fetching
  async function getBusPosData() {
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
        return [];
        // 운행 중인 버스가 없을 때
      } else if (response.status === 503) {
        console.log("운행 중인 버스가 없습니다.");
        //빈 배열 리턴
        return [];
        // 데이터가 정상적으로 처리되었다면
      } else if (response.status === 200) {
        // 각 버스의 위치 좌표 리턴
        const getPosBuses = busPosData.map((PosBus) => {
          return [PosBus.gpsY, PosBus.gpsX];
        });

        return getPosBuses;
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    }
  }

  // 버스 위치 정보 데이터 요청 함수 -> 각 정류장 관련 정보 fetching
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

      // 중앙대학교 방면 정류장들 관련 정보 필터링
      const busStationName_start = busStationInfos.filter(
        (busStationInfo, i) => {
          if (i >= 4 && i <= 25) {
            return busStationInfo;
          }
        }
      );

      // 신림2동차고지 방면 정류장들 관련 정보 필터링
      const busStationName_end = busStationInfos.filter((busStationInfo, i) => {
        if (i >= 51 && i <= 74) {
          return busStationInfo;
        }
      });

      console.log(busStationName_start, busStationName_end);

      // 각 방면 정류장 정보 리턴
      return [busStationName_start, busStationName_end];
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // 처음 마운트되었을 때 받은 새 버스 데이터 저장하는 객체
  const NewBusDataForFirstMount = {
    // 버스들 좌표 데이터 저장하는 상태
    busPoses: null,
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
  NewBusDataForFirstMount.busPoses = BusPosData;

  // 처음 마운트되었을 때 버스 도착 정보 데이터 요청
  const BusStationInfo = await getBusStationInfo();
  if (BusStationInfo.length < 2) {
    return null;
  }
  NewBusDataForFirstMount.busStationInfos.DirectionToStart = BusStationInfo[0];
  NewBusDataForFirstMount.busStationInfos.DirectionToEnd = BusStationInfo[1];

  // state에 NewBusDataForFirstMount 업데이트
  setBusData(NewBusDataForFirstMount);

  // 주기적으로 데이터 요청
  const fetchDataInterval = setInterval(async () => {
    //  주기적으로 받은 새 버스 데이터 저장하는 객체
    const NewBusDataForInterval = {
      // 버스들 좌표 데이터 저장하는 상태
      busPoses: null,
      // 각 정류장 관련 정보 저장하는 state
      busStationInfos: {
        // 중앙대학교 방면 정류장 정보
        DirectionToStart: [],
        // 신림2동차고지 방면 정류장 정보
        DirectionToEnd: [],
      },
    };

    // 주기적으로 버스 위치 정보 데이터 요청
    const BusPosData = await getBusPosData();
    if (!BusPosData) {
      clearInterval(fetchDataInterval);
    }
    NewBusDataForInterval.busPoses = BusPosData;

    // 주기적으로 버스 도착 정보 데이터 요청
    const BusStationInfo = await getBusStationInfo();
    if (BusStationInfo.length < 2) {
      clearInterval(fetchDataInterval);
    }
    NewBusDataForInterval.busStationInfos.DirectionToStart = BusStationInfo[0];
    NewBusDataForInterval.busStationInfos.DirectionToEnd = BusStationInfo[1];

    // state에 NewBusDataForInterval 업데이트
    setBusData(NewBusDataForInterval);
  }, 11000);

  // 언마운트 시 Interval 종료
  return () => clearInterval(fetchDataInterval);
}
