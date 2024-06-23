import { useEffect, useState } from "react";
import Map from "../components/Map/Map";
import getBusPosDataInterval from "../api/busAndStationDataFetch";
import Loading from "../components/Loading/Loading";

const BUSROUTEID_GWANAK02 = "120900008";

// 관악02번 버스 페이지
function ViewGwanak02Bus() {
  // 관악02번 버스들 좌표 데이터 저장하는 상태
  const [posGwanak02Buses, setPosGwanak02Buses] = useState(null);

  // 버스 위치 정보 데이터 fetching
  useEffect(() => {
    getBusPosDataInterval(BUSROUTEID_GWANAK02, setPosGwanak02Buses);
  }, []);

  return (
    <div>
      {!posGwanak02Buses ? (
        // 데이터가 아직 안들어왔을 때
        <Loading />
      ) : (
        // 맵 컴포넌트에 데이터 전달
        <Map position={posGwanak02Buses}></Map>
      )}
    </div>
  );
}

export default ViewGwanak02Bus;
