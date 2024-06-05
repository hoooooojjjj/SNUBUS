import React from "react";
import {
  BtnWrap,
  Container,
  StationLineWrap,
  StationSwitchBtn,
  TimelineStyle,
} from "./StationLineStyle";
const stationList = [
  {
    children: "서울대학교(중앙대학교 방면)",
    color: "blue",
  },
  { children: "서울대정문(중앙대학교 방면)", color: "blue" },
  {
    children: "법대.사회대입구(중앙대학교 방면)",
    color: "blue",
  },
  {
    children: "자연대.행정관입구(중앙대학교 방면)",
    color: "blue",
  },
  { children: "농생대(중앙대학교 방면)", color: "blue" },
  { children: "공대입구(중앙대학교 방면)", color: "blue" },
  { children: "신소재(중앙대학교 방면)", color: "blue" },
  {
    children: "건설환경종합연구소앞(중앙대학교 방면)",
    color: "blue",
  },
  { children: "제2공학관(중앙대학교 방면)", color: "blue" },
  {
    children: "유회진학술정보관.제1공학관(중앙대학교 방면)",
    color: "blue",
  },
  {
    children: "에너지자원연구소(중앙대학교 방면)",
    color: "blue",
  },
  { children: "공대입구(중앙대학교 방면)", color: "blue" },
  { children: "농생대(중앙대학교 방면)", color: "blue" },
  {
    children: "자연대.행정관입구(중앙대학교 방면)",
    color: "blue",
  },
  { children: "문화관입구(중앙대학교 방면)", color: "blue" },
  {
    children: "법대.사회대입구(중앙대학교 방면)",
    color: "blue",
  },
  { children: "서울대정문(중앙대학교 방면)", color: "blue" },
  {
    children: "서울대학교(중앙대학교 방면)",
    color: "blue",
  },
  {
    children: "서울대학교.치과병원.동물병원(중앙대학교 방면)",
    color: "blue",
  },
  {
    children: "서울여상.서울문영여중고앞(중앙대학교 방면)",
    color: "blue",
  },
  {
    children: "관악구청(중앙대학교 방면)",
    color: "blue",
  },
  {
    children: "서울대입구역(중앙대학교 방면)",
    color: "blue",
  },
];
const StationLine = () => {
  return (
    <Container>
      <StationLineWrap>
        <BtnWrap>
          <StationSwitchBtn>중앙대학교 방면</StationSwitchBtn>
          <StationSwitchBtn>신림2동차고지 방면</StationSwitchBtn>
        </BtnWrap>
        <TimelineStyle items={stationList} />
      </StationLineWrap>
    </Container>
  );
};
export default StationLine;
