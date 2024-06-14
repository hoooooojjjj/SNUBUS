import React, { useContext, useEffect, useState } from "react";
import { TimelineStyle, BusImg, TimeLinesWrap } from "./StationLineStyle";
import { DownCircleOutlined } from "@ant-design/icons";
import { busDataContext, busStationPosContext } from "../routes/View5511Bus";

const stationList_start = [
  {
    id: 4,
    children: "서울대학교",
    color: "blue",
    position: [37.4667414611, 126.9479522861],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 5,
    children: "서울대정문",
    color: "blue",
    position: [37.46573471, 126.9483889],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 6,
    children: "법대.사회대입구",
    color: "blue",
    position: [37.46279828, 126.9489902],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 7,
    children: "자연대.행정관입구",
    color: "blue",
    position: [37.46027459, 126.9488328],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 8,
    children: "농생대",
    color: "blue",
    position: [37.45716298, 126.949167],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 9,
    children: "공대입구",
    color: "blue",
    position: [37.45493101, 126.9498438],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 10,
    children: "신소재",
    color: "blue",
    position: [37.45349631, 126.9502262],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 11,
    children: "건설환경종합연구소앞",
    color: "blue",
    position: [37.44720025, 126.9496964],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 12,
    children: "제2공학관",
    color: "blue",
    position: [37.4487952, 126.9520773],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 13,
    children: "유회진학술정보관.제1공학관",
    color: "blue",
    position: [37.451283, 126.952595],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 14,
    children: "에너지자원연구소",
    color: "blue",
    position: [37.45359525, 126.9522142],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 15,
    children: "공대입구",
    color: "blue",
    position: [37.455364, 126.9498964],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 16,
    children: "농생대",
    color: "blue",
    position: [37.45711284, 126.9493877],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 17,
    children: "자연대.행정관입구",
    color: "blue",
    position: [37.45998981, 126.948956],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 18,
    children: "문화관입구",
    color: "blue",
    position: [37.46148685, 126.9494504],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 19,
    children: "법대.사회대입구",
    color: "blue",
    position: [37.46326054, 126.9490724],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 20,
    children: "서울대정문",
    color: "blue",
    position: [37.46537547, 126.9486358],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 21,
    children: "서울대학교",
    color: "blue",
    position: [37.46685391, 126.9488427043],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 22,
    children: "서울대학교.치과병원.동물병원",
    color: "blue",
    position: [37.46927442, 126.9520816],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 23,
    children: "서울여상.서울문영여중고앞",
    color: "blue",
    position: [37.47316048, 126.9533001],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 24,
    children: "관악구청",
    color: "blue",
    position: [37.47825141, 126.9524998],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 25,
    children: "서울대입구역",
    color: "blue",
    position: [37.48011095, 126.9527298],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
];
const stationList_end = [
  {
    id: 51,
    children: "서울대입구역",
    color: "blue",
    position: [37.48070059, 126.952444],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 52,
    children: "관악경찰서.관악소방서",
    color: "blue",
    position: [37.475253, 126.952572],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 53,
    children: "서울여상.서울문영여중고앞",
    color: "blue",
    position: [37.473002, 126.952845],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 54,
    children: "서울대학교.치과병원.동물병원",
    color: "blue",
    position: [37.470034, 126.951937],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 55,
    children: "서울대학교",
    color: "blue",
    position: [37.4667414611, 126.9479522861],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 56,
    children: "경영대.행정대학원",
    color: "blue",
    position: [37.46580585, 126.9509996],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 57,
    children: "수의대입구.보건대학원앞",
    color: "blue",
    position: [37.46583771, 126.9546455],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 58,
    children: "국제대학원",
    color: "blue",
    position: [37.46370892, 126.9549273],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 59,
    children: "관악사삼거리",
    color: "blue",
    position: [37.460528, 126.95666],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 60,
    children: "공동기기원",
    color: "blue",
    position: [37.45511895, 126.9544666],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 61,
    children: "유전공학연구소.반도체공동연구소",
    color: "blue",
    position: [37.45374769, 126.9535516],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 62,
    children: "에너지자원연구소",
    color: "blue",
    position: [37.45359525, 126.9522142],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 63,
    children: "신소재",
    color: "blue",
    position: [37.45349631, 126.9502262],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 64,
    children: "건설환경종합연구소앞",
    color: "blue",
    position: [37.44720025, 126.9496964],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 65,
    children: "제2공학관",
    color: "blue",
    position: [37.4487952, 126.9520773],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 66,
    children: "유회진학술정보관.제1공학관",
    color: "blue",
    position: [37.451283, 126.952595],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 67,
    children: "에너지자원연구소",
    color: "blue",
    position: [37.45359525, 126.9522142],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 68,
    children: "공대입구",
    color: "blue",
    position: [37.455364, 126.9498964],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 69,
    children: "농생대",
    color: "blue",
    position: [37.45711284, 126.9493877],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 70,
    children: "자연대.행정관입구",
    color: "blue",
    position: [37.45998981, 126.948956],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 71,
    children: "문화관입구",
    color: "blue",
    position: [37.46148685, 126.9494504],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 72,
    children: "법대.사회대입구",
    color: "blue",
    position: [37.46326054, 126.9490724],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 73,
    children: "서울대정문",
    color: "blue",
    position: [37.46537547, 126.9486358],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
  {
    id: 74,
    children: "신림중.삼성고.관악아트홀·도서관",
    color: "blue",
    position: [37.47055199, 126.944133],
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
];

function TimeLines({ isStart }) {
  // 클릭한 버스 정류장 좌표 전달하는 context
  const [busStationPos, setBusStationPos] = useContext(busStationPosContext);

  // 버스 위치 좌표 데이터 context
  const busStationInfos = useContext(busDataContext).busStationInfos;

  // snubus 정류장 라인에 걸쳐 있는(정류장 지나고 있는) 버스들 배열
  const busesInStation =
    useContext(busDataContext).busPoses.busPositionInStation;

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

  // 버스 정류장 클릭 시
  const isStationClicked = (e) => {
    // 정확히 버스 정류장 텍스트를 클릭했을 때만 실행
    if (e.target.className === "ant-timeline-item-content") {
      // 클릭한 버스 정류장 필터링
      const targetStation = (
        isStart ? stationList_start : stationList_end
      ).filter(
        // 클릭한 것의 innerText가 버스 정류장 이름과 같은 것으로 필터링
        (station) => station.children === e.target.innerText
      );

      // 클릭한 버스 정류장 좌표 전달하는 context에 정류장 이름과 좌표 전달
      setBusStationPos({
        name: targetStation[0].children,
        pos: targetStation[0].position,
      });
    }
  };

  // 정류장 라인을 두 개씩 쪼개서 버스 위치를 표시
  useEffect(() => {
    // 어떤 방면 정류장인지
    const stationList = isStart ? stationList_start : stationList_end;

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
      stationList_start,
      busesInStation.DirectionToStart
    );

    // 신림2동차고지 방면 지나가고 있는 버스의 현재 어떤 snubus 정류장에 위치하는지 찾기
    const passingBus_end = findPassingBusWithStationId(
      stationList_end,
      busesInStation.DirectionToEnd
    );
    // console.log(passingBus_start, passingBus_end);

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
        {/* 정류장 라인에 버스 위치 정보 표시하기 */}
        {isStart
          ? // 중앙대학교 방면 일 때
            // 분할한 정류장에서 정류장 id가 현재 버스가 지나고 있는 정류장 id와 같으면 버스 이미지 표시
            passingBusStation.startDirection.map((passingBus) => {
              if (passingBus.id === busStation[0].id) {
                // 다음 정류장까지 간 비율을 css에 대입하기 위한 계산
                // 한 라인의 길이가 70(-5부터 65까지) => passingBus.remainingDist를 -5부터 65까지의 비율로 계산
                const remainingDistMatchingCSS =
                  -5 + 70 * (passingBus.remainingDist * 0.01);
                return (
                  <BusImg
                    key={passingBus.id}
                    remainingDist={remainingDistMatchingCSS}
                    src={process.env.PUBLIC_URL + `assets/FeederBus.png`}
                  ></BusImg>
                );
              } else {
                return null;
              }
            })
          : // 신림2동차고지 방면 일 때
            // 분할한 정류장에서 정류장 id가 현재 버스가 지나고 있는 정류장 id와 같으면 버스 이미지 표시
            passingBusStation.endDirection.map((passingBus) => {
              if (passingBus.id === busStation[0].id) {
                // 다음 정류장까지 간 비율을 css에 대입하기 위한 계산
                // 한 라인의 길이가 70(-5부터 65까지) => passingBus.remainingDist를 -5부터 65까지의 비율로 계산
                const remainingDistMatchingCSS =
                  -5 + 70 * (passingBus.remainingDist * 0.01);
                return (
                  <BusImg
                    key={passingBus.id}
                    remainingDist={remainingDistMatchingCSS}
                    src={process.env.PUBLIC_URL + `assets/FeederBus.png`}
                  ></BusImg>
                );
              } else {
                return null;
              }
            })}
      </TimeLinesWrap>
    ))
  ) : (
    <></>
  );
}

export default TimeLines;
