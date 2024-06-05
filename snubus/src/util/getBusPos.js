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

      // 데이터 요청 횟수 초과 시
      if (response.status === 429) {
        console.log("Too many requests, please try again later.");
        return null;
      } else {
        // 데이터가 정상적으로 처리되었다면
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
