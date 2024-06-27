import React, { useState } from "react";
import {
  LoadingContainer,
  LoadingWrap,
  LogoStyle,
  LogoCover,
  TMI,
} from "./LoadingStyle";

const SNUTMI = [
  "행정관 앞 버스정류장 뒤에 있는 철문은 전쟁났을 때 사용하기 위한 비밀벙커 입구입니다.",
  "아랫공대와 수학과 건물은 서로 통하는 비밀통로가 숨어져 있습니다.",
  "지금 서울대는 원래 대학마다 뿔뿔이 흩어져 있던 건물을 모은 것입니다",
  "서울대 시흥캠퍼스가 생길 당시에 우리 학교 학생들이 무력으로 본부와 총장실을 점거한 적이 있습니다",
  "사실 서울대학교 건물들 대부분은 설계도 하나로 찍어내서 비슷하게 생겼습니다.",
  "원래 자하연에 다리가 있었습니다.",
  "서울대학교에 사는 새들은 발목에 인식표가 있는 경우가 많습니다.",
  "서울대학교는 실제 학생 및 교직원 정원보다 출입하는 인원이 훨씬 많습니다.",
];

function Loading({ display }) {
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * (SNUTMI.length - 1))
  );
  return (
    <LoadingContainer display={display}>
      <LoadingWrap>
        <LogoStyle>
          <LogoCover></LogoCover>SNUBUS
        </LogoStyle>
        <br />
        <TMI>
          <strong>알고 계셨나요 ?</strong>
        </TMI>
        <TMI>"{SNUTMI[randomIndex]}"</TMI>
      </LoadingWrap>
    </LoadingContainer>
  );
}

export default Loading;
