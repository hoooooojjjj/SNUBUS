import styled from "@emotion/styled";
import { Font_BlackHanSans, flex } from "../../util/publicStyleComponents";
import { keyframes } from "@emotion/react";

// Map 컴포넌트 컨테이너
export const Container = styled.div({
  width: "70dvw",
  height: "100dvh",
  position: "relative",
  ...Font_BlackHanSans(),
  color: "black",
});

// 지도
export const Maps = styled.div({
  width: "100%",
  height: "100%",
});

// 버스 관련 정보
export const BusInfo = styled.div({
  position: "absolute",
  top: 10,
  left: 10,
  zIndex: 2,
  fontSize: 15,
  "@media(max-width: 1024px)": {
    fontSize: 13,
  },
});

// 업데이트 관련 컴포넌트 wrap
export const UpdateWrap = styled.div({
  position: "absolute",
  top: 10,
  right: 10,
  zIndex: 2,
  ...flex("column", "normal", "flex-end"),
});

// rotateOnce 애니메이션 정의
const rotateOnce = keyframes`
  0% {
     transform: rotate(0deg);
  }
  500% {
     transform: rotate(180deg);
  }
  100% {
     transform: rotate(360deg);
  }
`;

// 업데이트 버튼
export const UpdateBtn = styled.button`
  background: none;
  border: none;
  animation-name: ${(props) => (props.animate ? rotateOnce : "none")};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

// 데이터 제공 시간
export const DataTm = styled.p({
  fontSize: 15,
  "@media(max-width: 1024px)": {
    fontSize: 13,
  },
});
