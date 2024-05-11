import { useEffect, useState } from "react";
import Map from "../util/Map";
import getData from "../util/getBusPos";
import Loading from "../util/Loading";

// 관악02번 버스 페이지
function ViewGwanak02Bus() {
  const BUSROUTEID_GWANAK02 = "120900008";
  // 관악02번 버스들 좌표 데이터 저장하는 상태
  const [posGwanak02Buses, setPosGwanak02Buses] = useState(null);

  // 버스 위치 정보 데이터 fetching
  useEffect(() => {
    // 처음 마운트 되었을 때 fetching
    getData(BUSROUTEID_GWANAK02).then((res) => {
      setPosGwanak02Buses(res);
    });

    // 10초 마다 데이터 업데이트
    const fetchDataInterval = setInterval(() => {
      getData(BUSROUTEID_GWANAK02).then((res) => {
        setPosGwanak02Buses(res);
      });
    }, 10000); // 10초마다 데이터 다시 요청

    // 컴포넌트가 언마운트될 때 clearInterval 호출하여 메모리 누수 방지
    return () => clearInterval(fetchDataInterval);
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
