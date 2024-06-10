import React, { useContext, useEffect, useState } from "react";
import { TimelineStyle } from "./StationLineStyle";
import { DownCircleOutlined } from "@ant-design/icons";
import { busDataContext, busStationPosContext } from "../routes/View5511Bus";

const stationList_start = [
  {
    children: "서울대학교(중앙대학교 방면)",
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
    children: "서울대정문(중앙대학교 방면)",
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
    children: "법대.사회대입구(중앙대학교 방면)",
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
    children: "자연대.행정관입구(중앙대학교 방면)",
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
    children: "농생대(중앙대학교 방면)",
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
    children: "공대입구(중앙대학교 방면)",
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
    children: "신소재(중앙대학교 방면)",
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
    children: "건설환경종합연구소앞(중앙대학교 방면)",
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
    children: "제2공학관(중앙대학교 방면)",
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
    children: "유회진학술정보관.제1공학관(중앙대학교 방면)",
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
    children: "에너지자원연구소(중앙대학교 방면)",
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
    children: "공대입구(중앙대학교 방면)",
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
    children: "농생대(중앙대학교 방면)",
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
    children: "자연대.행정관입구(중앙대학교 방면)",
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
    children: "문화관입구(중앙대학교 방면)",
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
    children: "법대.사회대입구(중앙대학교 방면)",
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
    children: "서울대정문(중앙대학교 방면)",
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
    children: "서울대학교(중앙대학교 방면)",
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
    children: "서울대학교.치과병원.동물병원(중앙대학교 방면)",
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
    children: "서울여상.서울문영여중고앞(중앙대학교 방면)",
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
    children: "관악구청(중앙대학교 방면)",
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
    children: "서울대입구역(중앙대학교 방면)",
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
    children: "서울대입구역(신림2동차고지 방면)",
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
    children: "관악경찰서.관악소방서(신림2동차고지 방면)",
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
    children: "서울여상.서울문영여중고앞(신림2동차고지 방면)",
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
    children: "서울대학교.치과병원.동물병원(신림2동차고지 방면)",
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
    children: "서울대학교(신림2동차고지 방면)",
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
    children: "경영대.행정대학원(신림2동차고지 방면)",
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
    children: "수의대입구.보건대학원앞(신림2동차고지 방면)",
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
    children: "국제대학원(신림2동차고지 방면)",
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
    children: "관악사삼거리(신림2동차고지 방면)",
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
    children: "공동기기원(신림2동차고지 방면)",
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
    children: "유전공학연구소.반도체공동연구소(신림2동차고지 방면)",
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
    children: "에너지자원연구소(신림2동차고지 방면)",
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
    children: "신소재(신림2동차고지 방면)",
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
    children: "건설환경종합연구소앞(신림2동차고지 방면)",
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
    children: "제2공학관(신림2동차고지 방면)",
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
    children: "유회진학술정보관.제1공학관(신림2동차고지 방면)",
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
    children: "에너지자원연구소(신림2동차고지 방면)",
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
    children: "공대입구(신림2동차고지 방면)",
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
    children: "농생대(신림2동차고지 방면)",
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
    children: "자연대.행정관입구(신림2동차고지 방면)",
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
    children: "문화관입구(신림2동차고지 방면)",
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
    children: "법대.사회대입구(신림2동차고지 방면)",
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
    children: "서울대정문(신림2동차고지 방면)",
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
    children: "신림중.삼성고.관악아트홀·도서관(신림2동차고지 방면)",
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

  // 버스 정류장 라인 분할한 배열 저장하는 state
  const [busStationSlice, setBusStationSlice] = useState([]);

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
    // 버스 정류장 라인 분할하는 배열 담기 위한 변수
    const newBuseStationSlice = [];

    // 버스 정류장 라인을 [첫번째 정류장,두번째 정류장]으로 분리
    for (
      let i = 0;
      i < (isStart ? stationList_start : stationList_end).length;
      i++
    ) {
      // 각 인덱스의 [첫번째 정류장,두번째 정류장]을 newBuseStationSlice에 담기
      newBuseStationSlice.push([
        (isStart ? stationList_start : stationList_end)[i],
        (isStart ? stationList_start : stationList_end)[i + 1],
      ]);
    }

    // newBuseStationSlice를 state에 업데이트
    setBusStationSlice(newBuseStationSlice);
  }, []);

  return busStationSlice ? (
    // 각 분할한 정류장마다 정류장 라인 생성
    busStationSlice.map((busStation) => (
      <TimelineStyle
        key={busStation[0].position}
        items={busStation}
        onClick={isStationClicked}
      />
    ))
  ) : (
    <></>
  );
}

export default TimeLines;
