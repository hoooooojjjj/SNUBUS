import { useEffect, useState } from "react";
import Map from "./util/Map";
import getData from "./util/getBusPos";

function App() {
  // 5511번 버스들 좌표 데이터 저장하는 상태
  const [pos5511Buses, setPos5511Buses] = useState(null);

  // 버스 위치 정보 데이터 fetching

  // 데이터 fetching
  useEffect(() => {
    // 처음 마운트 되었을 때 fetching
    getData("100100250").then((res) => {
      setPos5511Buses(res);
    });

    // 10초 마다 데이터 업데이트
    const fetchDataInterval = setInterval(() => {
      getData("100100250").then((res) => {
        setPos5511Buses(res);
      });
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
