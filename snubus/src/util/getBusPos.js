// 버스 위치 정보 데이터 fetching
export default async function getData(busRouteId) {
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=${busRouteId}&resultType=json`
    )}`,
    {
      cache: "no-store", // 캐시 무시 옵션 추가
    }
  );
  // 데이터 받아서 json 형태로 저장
  const jsonData = await response.json();

  // 각 버스 좌표 데이터를 배열로 저장
  const getPos5511Buses = JSON.parse(jsonData.contents).msgBody.itemList.map(
    (Pos5511Bus) => [Pos5511Bus.gpsY, Pos5511Bus.gpsX]
  );

  // 버스 좌표 데이터 배열 리턴
  return getPos5511Buses;
}
