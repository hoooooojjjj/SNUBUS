import { useEffect, useState } from "react";
import Map from "./util/Map";

function App() {
  const [data, setData] = useState(null);

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
    setData(jsonData);
  }

  useEffect(() => {
    getData();
    const fetchDataInterval = setInterval(() => {
      getData();
    }, 10000); // 10초마다 데이터 다시 요청

    // 컴포넌트가 언마운트될 때 clearInterval 호출하여 메모리 누수 방지
    return () => clearInterval(fetchDataInterval);
  }, []); // useEffect의 의존성 배열이 비어 있으므로 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      {!data ? (
        <> </>
      ) : (
        <Map
          position={[
            JSON.parse(data.contents).msgBody.itemList[2].gpsY,
            JSON.parse(data.contents).msgBody.itemList[2].gpsX,
          ]}
        ></Map>
      )}
    </div>
  );
}

export default App;
