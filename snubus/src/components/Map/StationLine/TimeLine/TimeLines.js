import React, { useContext, useEffect, useState } from "react";
import { TimelineStyle, BusImg, TimeLinesWrap } from "../StationLineStyle";
import { ViewContext } from "../../../../routes/View";
import { stationList_end, stationList_start } from "./StationList";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function TimeLines({ isStart, bus_stationData }) {
  // 현재 파라미터 받아와서 버스 번호 확인
  const { id } = useParams();

  /* state 코드 */

  // 버스 정류장 라인 분할한 배열 저장하는 state
  const [busStationSlice, setBusStationSlice] = useState([]);

  //  현재 운행 중인 버스가 위치한 snubus 정류장 관련 state
  const [passingBusStation, setPassingBusStation] = useState({
    // 중앙대학교 방면
    startDirection: {
      // 정류장 순번
      id: [],
      // 남은 거리
      remainingDist: [],
    },
    // 신림2동차고지 방면
    endDirection: {
      // 정류장 순번
      id: [],
      // 남은 거리
      remainingDist: [],
    },
  });

  /* Context API 코드 */

  // view 페이지에서 받아온 context
  const {
    // 클릭한 버스 정류장 좌표 전달하는 context
    setBusStationPos,
    // infoWindow 열고 닫는 context
    setIsInfoWindowVisible,
  } = useContext(ViewContext);

  /* redux 코드 */
  // snubus 정류장 라인에 걸쳐 있는(정류장 지나고 있는) 버스들 배열
  const busesInStation = bus_stationData.busDataReducer.busPositionInStation;

  /* 함수 코드 */

  // 버스 정류장 클릭 시
  const isStationClicked = (e) => {
    // 정확히 버스 정류장 텍스트를 클릭했을 때만 실행
    if (e.target.className === "ant-timeline-item-content") {
      // 클릭한 버스 정류장 필터링
      const targetStation = (
        isStart ? stationList_start[id] : stationList_end[id]
      ).filter(
        // 버스 정류장 리스트 중 클릭한 요소의 stid와 stid와 같은 것으로 필터링
        (station) =>
          station.stid === parseInt(e.target.parentNode.attributes.stid.value)
      );

      // 클릭한 버스 정류장 좌표 전달하는 context에 정류장 이름과 좌표, 방향 전달
      setBusStationPos({
        name: targetStation[0].children,
        pos: targetStation[0].position,
        Direction: isStart,
        stId: targetStation[0].stid,
      });

      // 인포윈도우 열기
      setIsInfoWindowVisible(true);
    }
  };

  // 해당 정류장 라인을 지나고 있는 버스 이미지 프린트
  const printPassingBusOnThisStation = (passingBusStation, busStation) => {
    // 분할한 정류장에서 정류장 id가 현재 버스가 지나고 있는 정류장 id와 같으면 버스 이미지 표시
    const busImages = passingBusStation.map((passingBus) => {
      if (passingBus.id === busStation[0].id) {
        // 다음 정류장까지 간 비율을 css에 대입하기 위한 계산
        // 한 라인의 길이가 70(-5부터 65까지) => passingBus.remainingDist를 -5부터 65까지의 비율로 계산
        const remainingDistMatchingCSS =
          -5 + 70 * (passingBus.remainingDist * 0.01);
        return (
          <BusImg
            key={passingBus.id}
            remainingDist={remainingDistMatchingCSS}
            src={process.env.PUBLIC_URL + `/assets/FeederBus.png`}
          ></BusImg>
        );
      } else {
        return null;
      }
    });
    return busImages;
  };

  /* useEffect 코드 */

  // 정류장 라인을 두 개씩 쪼개서 버스 위치를 표시
  useEffect(() => {
    // 어떤 방면 정류장인지
    const stationList = isStart ? stationList_start[id] : stationList_end[id];

    // 버스 정류장 라인 분할하는 배열 담기 위한 변수
    const newBuseStationSlice = [];

    // 버스 정류장 라인을 [첫번째 정류장,두번째 정류장]으로 분리
    for (let i = 0; i < stationList.length; i++) {
      // 각 인덱스의 [첫번째 정류장,두번째 정류장]을 newBuseStationSlice에 담기
      newBuseStationSlice.push([stationList[i], stationList[i + 1]]);
    }

    // newBuseStationSlice를 state에 업데이트
    setBusStationSlice(newBuseStationSlice);
  }, [isStart]);

  // 현재 운행 중인 버스가 어느 snubus 정류장에 위치하고 있는지(지나가고 있는지) 찾기
  useEffect(() => {
    // 정류장 리스트와 각 방면을 지나고 있는 버스 배열 인자로 받아서
    function findPassingBusWithStationId(stations, passingBusArr) {
      // 각 방면을 지나고 있는 버스 배열 요소들의 sectOrd(정류장 순번)과 정류장 리스트 배열 요소의 id(정류장 순번)이 일치하는 요소만 필터링
      return passingBusArr
        .map((passingBus) => {
          return stations.find(
            (station) => station.id === parseInt(passingBus.sectOrd)
          );
        })
        .filter((bus) => bus !== undefined);
    }

    // 중앙대학교 방면 지나가고 있는 버스가 현재 어떤 snubus 정류장에 위치하는지 찾기
    const passingBus_start = findPassingBusWithStationId(
      stationList_start[id],
      busesInStation.DirectionToStart
    );

    // 신림2동차고지 방면 지나가고 있는 버스의 현재 어떤 snubus 정류장에 위치하는지 찾기
    const passingBus_end = findPassingBusWithStationId(
      stationList_end[id],
      busesInStation.DirectionToEnd
    );

    // 중앙대학교 방면 지나가고 있는 버스들의 다음 정류장까지 간 비율 계산(몇 % 왔는지)
    const remainingDist_start = busesInStation.DirectionToStart.map((bus) =>
      Math.round((Number(bus.sectDist) / Number(bus.fullSectDist)) * 100)
    );

    // 신림2동차고지 방면 지나가고 있는 버스들의 다음 정류장까지 간 비율 계산(몇 % 왔는지)
    const remainingDist_end = busesInStation.DirectionToEnd.map((bus) =>
      Math.round((Number(bus.sectDist) / Number(bus.fullSectDist)) * 100)
    );

    // 현재 운행 중인 버스가 위치한 snubus 정류장 관련 state 업데이트
    setPassingBusStation({
      startDirection: passingBus_start.map((passingBus, i) => {
        return {
          id: passingBus.id - 1,
          remainingDist: remainingDist_start[i],
        };
      }),
      endDirection: passingBus_end.map((passingBus, i) => {
        return {
          id: passingBus.id - 1,
          remainingDist: remainingDist_end[i],
        };
      }),
    });
  }, [busesInStation]);

  return busStationSlice ? (
    // 각 분할한 정류장마다 정류장 라인 생성
    busStationSlice.map((busStation, i) => (
      <TimeLinesWrap key={i}>
        <TimelineStyle items={busStation} onClick={isStationClicked} />
        {/* 정류장 라인에 버스 표시하기 */}
        {isStart
          ? // 중앙대학교 방면 일 때
            printPassingBusOnThisStation(
              passingBusStation.startDirection,
              busStation
            )
          : // 신림2동차고지 방면 일 때
            printPassingBusOnThisStation(
              passingBusStation.endDirection,
              busStation
            )}
      </TimeLinesWrap>
    ))
  ) : (
    <></>
  );
}

// 상태를 props로 매핑
function mapStateToProps(state) {
  return { bus_stationData: state };
}

export default connect(mapStateToProps)(TimeLines);
