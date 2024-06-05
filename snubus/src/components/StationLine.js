import React, { useState } from "react";
import { DownCircleOutlined } from "@ant-design/icons";
import {
  BtnWrap,
  Container,
  StationLineWrap,
  StationSwitchBtn,
  LineWrap,
  TimelineStyle,
  BusImg,
} from "./StationLineStyle";
const stationList_start = [
  {
    children: "서울대학교(중앙대학교 방면)",
    color: "blue",
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
    dot: (
      <DownCircleOutlined
        style={{
          fontSize: "16px",
        }}
      />
    ),
  },
];

const StationLine = () => {
  // 중앙대학교 방면을 선택했는지 확인하는 state(방면 전환)
  const [isStart, setIsStart] = useState(true);

  // 각 방면 버튼을 클릭하면 정류장 라인 전환
  const switchDirection = () => {
    setIsStart(!isStart);
  };
  return (
    <Container>
      <StationLineWrap>
        <BtnWrap>
          <StationSwitchBtn onClick={switchDirection}>
            중앙대학교 방면
          </StationSwitchBtn>
          <StationSwitchBtn onClick={switchDirection}>
            신림2동차고지 방면
          </StationSwitchBtn>
        </BtnWrap>
        <LineWrap>
          <TimelineStyle
            items={isStart ? stationList_start : stationList_end}
          />
          <BusImg
            src={process.env.PUBLIC_URL + `assets/FeederBus.png`}
          ></BusImg>
        </LineWrap>
      </StationLineWrap>
    </Container>
  );
};
export default StationLine;
