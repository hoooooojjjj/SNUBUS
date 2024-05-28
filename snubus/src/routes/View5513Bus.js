import { useEffect, useState } from "react";
import Map from "../components/Map";
import getBusPosDataInterval from "../util/getBusPos";
import Loading from "../components/Loading";

const BUSROUTEID_5513 = "100100251";

// 5513번 버스 페이지
function View5513Bus() {
  // 5513번 버스들 좌표 데이터 저장하는 상태
  const [pos5513Buses, setPos5513Buses] = useState(null);

  // 버스 위치 정보 데이터 fetching
  useEffect(() => {
    getBusPosDataInterval(BUSROUTEID_5513, setPos5513Buses);
  }, []);

  return (
    <div>
      {!pos5513Buses ? (
        // 데이터가 아직 안들어왔을 때
        <Loading />
      ) : (
        // 맵 컴포넌트에 데이터 전달
        <Map position={pos5513Buses}></Map>
      )}
    </div>
  );
}

export default View5513Bus;
