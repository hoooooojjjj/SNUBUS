// 버스 노선 경로 데이터 fetching
async function getDirectionsData() {
  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://maps.googleapis.com/maps/api/directions/json?destination=37.4487952,126.9520773&mode=transit&origin=37.4667414611,126.9479522861&key=${process.env.REACT_APP_GOOGLEMAPS_API_KEY}`
      )}`
    );
    // 데이터 받아서 json 형태로 저장
    const jsonData = await response.json();
    const directions = JSON.parse(jsonData.contents);

    // directions 데이터가 상태가 OK면
    if (directions.status === "OK") {
      console.log(directions.routes[0].overview_polyline.points);
      // 데이터의 overview_polyline.points 데이터(경로 데이터) 추출 후 리턴
      return directions.routes[0].overview_polyline.points;
    } else {
      throw new Error("Directions request failed");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export default getDirectionsData;
