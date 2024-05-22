// 버스 위치 정보 데이터 주기적으로 호출
export default function getDataInterval(busRouteId, setState, signal) {
  // 버스 위치 정보 데이터 fetching
  async function getData() {
    try {
      // signal을 fetch에 옵션으로 추가
      // AbortSignal의 인스턴스를 받고 AbortController를 이용해서 원할 때 fetch 요청을 취소할 수 있음
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=${busRouteId}&resultType=json`
        )}`,
        {
          cache: "no-cache",
          // 캐시 무시 옵션 추가
        },
        { signal }
      );
      // 데이터 받아서 json 형태로 저장
      const jsonData = await response.json();

      // 각 버스 좌표 데이터를 배열로 저장
      const getPosBuses = JSON.parse(jsonData.contents).msgBody.itemList.map(
        (PosBus) => {
          return [PosBus.gpsY, PosBus.gpsX];
        }
      );
      // 버스 좌표 데이터 배열 리턴
      return getPosBuses;
    } catch (error) {
      // fetch()가 취소되면 AbortError라는 DOMException을 던지기 때문에 취소된 오류와 다른 오류를 구분해서 처리할 수 있다.
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    }
  }
  // 처음 마운트 되었을 때 fetching
  getData().then((res) => {
    setState(res);
  });

  // 11초 마다 데이터 업데이트
  const fetchDataInterval = setInterval(() => {
    getData().then((res) => {
      setState(res);
    });
  }, 11000); // 11초마다 데이터 다시 요청

  // 컴포넌트가 언마운트될 때 clearInterval 호출하여 메모리 누수 방지
  return () => clearInterval(fetchDataInterval);
}
