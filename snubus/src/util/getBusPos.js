export default function getBusPosDataInterval(busRouteId, setState, signal) {
  async function getBusPosData() {
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

      const busPosData = await response.json();

      // if (
      //   jsonData.msgHeader.headerMsg ===
      //   "Key인증실패: LIMITED NUMBER OF SERVICE REQUESTS EXCEEDS ERROR.[인증모듈 에러코드(22)]"
      // ) {
      //   console.log("데이터 요청 횟수 초과");
      //   return null;
      // }

      // if (jsonData.msgHeader.headerMsg === "정상적으로 처리되었습니다.") {
      const getPosBuses = busPosData.map((PosBus) => {
        return [PosBus.gpsY, PosBus.gpsX];
      });

      return getPosBuses;
      // }

      return [];
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    }
  }

  getBusPosData().then((res) => {
    if (!res) {
      return null;
    }
    setState(res);
  });

  const fetchDataInterval = setInterval(() => {
    getBusPosData().then((res) => {
      if (!res) {
        clearInterval(fetchDataInterval);
      }
      setState(res);
    });
  }, 11000);

  return () => clearInterval(fetchDataInterval);
}
