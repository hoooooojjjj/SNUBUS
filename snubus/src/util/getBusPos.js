// 버스 위치 정보 데이터 주기적으로 호출
export default function getDataInterval(busRouteId, setState) {
  // 버스 위치 정보 데이터 fetching
  async function getData() {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=${busRouteId}&resultType=json`
      )}`,
      {
        cache: "no-cache",
        // 캐시 무시 옵션 추가
      }
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
