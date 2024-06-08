import React, { useContext, useEffect, useState } from "react";
import Map from "../components/Map";
import getBusDataInterval from "../util/getBusPos";
import Loading from "../components/Loading";
import { Container } from "./ViewStyle";
import { isMapPrintContext } from "../App";
import StationLine from "../components/StationLine";

const BUSROUTEID_5511 = "100100250";

export const busStationPosContext = React.createContext();

// 5511번 버스 페이지
function View5511Bus() {
  // 카카오맵이 화면에 표시됐는지 판별하는 state
  const [isMapPrint, setIsMapPrint] = useContext(isMapPrintContext);

  // 버스 정류장 좌표 state -> StationLine 컴포넌트에 있는 정류장을 클릭하면 클릭한 정류장 좌표가 저장
  const [busStationPos, setBusStationPos] = useState({
    name: "",
    pos: "",
  });

  // 5511번 버스들 좌표 데이터 저장하는 상태
  const [pos5511Buses, setPos5511Buses] = useState(null);

  // 각 정류장 관련 정보 저장하는 state
  // 중앙대학교 방면 정류장 정보
  const [busStationInfo_start, setBusStationInfo_start] = useState([]);

  // 신림2동차고지 방면 정류장 정보
  const [busStationInfo_end, setBusStationInfo_end] = useState([]);

  // 버스 위치 정보 데이터 fetching
  useEffect(() => {
    // 새로운 AbortController 객체 인터페이스를 생성
    const controller = new AbortController();
    // DOM 요청과 통신하거나 취소하는데 사용되는 AbortSignal 객체 인터페이스
    const signal = controller.signal;
    // signal을 getBusPosDataInterval의 인자로 보냄
    getBusDataInterval(
      BUSROUTEID_5511,
      setPos5511Buses,
      signal,
      setBusStationInfo_start,
      setBusStationInfo_end
    );
    return () => {
      // DOM 요청이 완료되기 전에 취소한다. 이를 통해 fetch 요청, 모든 응답 Body 소비, 스트림을 취소할 수 있다.
      controller.abort(); // Fetch 요청 취소
    };
  }, []);

  return (
    <Container>
      {/* isMapPrint가 false일 때(카카오맵이 다 그려졌을 때) Loading 컴포넌트가 렌더링되고 true일 때 사라짐 */}
      <Loading display={isMapPrint ? "none" : "block"} />
      {/* isMapPrint가 false일 때(카카오맵이 다 그려졌을 때) Map 컴포넌트가 안보이고 true일 때 보이게 함 */}
      {/* 이렇게 해서 완전히 카카오맵이 다 그려지기 전까지는 로딩창을 띄우게 만듬 */}
      {pos5511Buses ? (
        <busStationPosContext.Provider
          value={[busStationPos, setBusStationPos]}
        >
          {/* 데이터가 들어왔을 때 Map 컴포넌트 렌더링 */}
          <div style={{ display: "flex" }}>
            <Map position={pos5511Buses}></Map>
            {isMapPrint ? <StationLine /> : <></>}
          </div>
        </busStationPosContext.Provider>
      ) : (
        // 데이터가 안 들어왔을 때
        <></>
      )}
    </Container>
  );
}

export default View5511Bus;
