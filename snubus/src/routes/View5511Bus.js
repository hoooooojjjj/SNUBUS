import { useEffect, useState } from "react";
import Map from "../components/Map";
import getDataInterval from "../util/getBusPos";
import Loading from "../components/Loading";
import { Container } from "./ViewStyle";

const BUSROUTEID_5511 = "100100250";

// 5511번 버스 페이지
function View5511Bus() {
  // 5511번 버스들 좌표 데이터 저장하는 상태
  const [pos5511Buses, setPos5511Buses] = useState(null);

  // 버스 위치 정보 데이터 fetching
  useEffect(() => {
    getDataInterval(BUSROUTEID_5511, setPos5511Buses);
  }, []);

  return (
    <Container>
      {!pos5511Buses ? (
        // 데이터가 아직 안들어왔을 때
        <Loading />
      ) : (
        // 맵 컴포넌트에 데이터 전달
        <Map position={pos5511Buses}></Map>
      )}
    </Container>
  );
}

export default View5511Bus;
