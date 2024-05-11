import { useEffect, useState } from "react";
import Map from "./util/Map";

function App() {
  // 5511번 버스들 좌표 데이터 저장하는 상태
  const [pos5511Buses, setPos5511Buses] = useState(null);

  // 버스 위치 정보 데이터 fetching
  async function getData() {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid?ServiceKey=${process.env.REACT_APP_BUS_API_KEY}&busRouteId=100100250&resultType=json`
      )}`,
      {
        cache: "no-store", // 캐시 무시 옵션 추가
      }
    );
    const jsonData = await response.json();
    const getPos5511Buses = JSON.parse(jsonData.contents).msgBody.itemList.map(
      (Pos5511Bus) => [Pos5511Bus.gpsY, Pos5511Bus.gpsX]
    );
    // 버스 데이터 저장하는 상태에 저장
    setPos5511Buses(getPos5511Buses);
  }

  // 데이터 fetching
  useEffect(() => {
    // 처음 마운트 되었을 때 fetching
    getData();

    // 10초 마다 데이터 업데이트
    const fetchDataInterval = setInterval(() => {
      getData();
    }, 10000); // 10초마다 데이터 다시 요청

    // 컴포넌트가 언마운트될 때 clearInterval 호출하여 메모리 누수 방지
    return () => clearInterval(fetchDataInterval);
  }, []);

  return (
    <div>
      {!pos5511Buses ? (
        // 데이터가 아직 안들어왔을 때
        <> </>
      ) : (
        // 맵 컴포넌트에 데이터 전달
        <Map position={pos5511Buses}></Map>
      )}
    </div>
  );
}

export default App;
