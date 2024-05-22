import React, { useContext, useEffect, useState } from "react";
import Map from "../components/Map";
import getDataInterval from "../util/getBusPos";
import Loading from "../components/Loading";
import { Container } from "./ViewStyle";
import { isMapPrintContext } from "../App";

const BUSROUTEID_5511 = "100100250";

// 5511번 버스 페이지
function View5511Bus() {
  // 카카오맵이 화면에 표시됐는지 판별하는 state
  const [isMapPrint, setIsMapPrint] = useContext(isMapPrintContext);

  // 5511번 버스들 좌표 데이터 저장하는 상태
  const [pos5511Buses, setPos5511Buses] = useState(null);

  // 버스 위치 정보 데이터 fetching
  useEffect(() => {
    getDataInterval(BUSROUTEID_5511, setPos5511Buses);
  }, []);

  return (
    <Container>
      {pos5511Buses ? (
        // 데이터가 들어왔을 때
        <>
          {/* isMapPrint가 false일 때(카카오맵이 다 그려졌을 때) Loading 컴포넌트가 렌더링되고 true일 때 사라짐 */}
          <Loading display={isMapPrint ? "none" : "block"} />
          {/* isMapPrint가 false일 때(카카오맵이 다 그려졌을 때) Map 컴포넌트가 안보이고 true일 때 보이게 함 */}
          {/* 이렇게 해서 완전히 카카오맵이 다 그려지기 전까지는 로딩창을 띄우게 만듬 */}
          <Map
            position={pos5511Buses}
            visibility={isMapPrint ? "visible" : "hidden"}
          ></Map>
        </>
      ) : (
        // 데이터가 들어오지 않았을 때
        <Loading />
      )}
    </Container>
  );
}

export default View5511Bus;
