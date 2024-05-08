import { useEffect, useState } from "react";
import Map from "./util/Map";
function App() {
  // 현재 버스 위치 상태
  const [position, setPosition] = useState([]);

  // 버스 위치 정보 fetching
  setInterval(() => {
    getData();
  }, 5000);

  // 버스 위치 정보 fetching
  async function getData() {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=100100250&resultType=json`
      )}`
    );
    const jsonData = await response.json();
    console.log(
      JSON.parse(jsonData.contents).msgBody.itemList[0].gpsY,
      JSON.parse(jsonData.contents).msgBody.itemList[0].gpsX
    );
    const gpsY = JSON.parse(jsonData.contents).msgBody.itemList[0].gpsY;
    const gpsX = JSON.parse(jsonData.contents).msgBody.itemList[0].gpsX;

    setPosition((prev) => [gpsY, gpsX]);
  }
  return (
    <div>
      <Map position={position}></Map>
    </div>
  );
}

export default App;
