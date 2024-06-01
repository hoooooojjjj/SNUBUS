// polyline-encoded 라이브러리 사용
const polyUtil = require("polyline-encoded");

// Google directions API에 버스 노선 경로 좌표 데이터 fetching
// 출발지 - 목적지 위도,경도 좌표를 인자로 받음
async function getDirectionsData(
  originLatitude,
  originLongitude,
  destinationLatitude,
  destinationLongitude
) {
  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${String(
          originLatitude
        )},${String(originLongitude)}&destination=${String(
          destinationLatitude
        )},${String(destinationLongitude)}&mode=transit&transit_mode=bus&key=${
          process.env.REACT_APP_GOOGLEMAPS_API_KEY
        }`
      )}`
    );
    // 데이터 받아서 json 형태로 저장
    const jsonData = await response.json();
    const directions = JSON.parse(jsonData.contents);

    // polyline-encoded 라이브러리를 통해 버스 노선 경로 좌표 디코딩
    const decodeddirections = polyUtil.decode(
      directions.routes[0].overview_polyline.points
    );

    // 데이터의 overview_polyline.points 데이터(경로 데이터) 추출 후 리턴
    return decodeddirections;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export default getDirectionsData;
