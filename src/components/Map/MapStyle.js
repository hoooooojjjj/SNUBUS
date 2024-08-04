import styled from "@emotion/styled";
import { Font_DoHyeon, flex } from "../../util/publicStyleComponents";
import { keyframes } from "@emotion/react";

// Map 컴포넌트 컨테이너
export const Container = styled.div((props) => ({
  width: "75dvw",
  height: "90dvh",
  ...flex("row", "center", "center"),
  "@media(max-width: 550px)": {
    width: "100dvw",
    height: props.isInfoWindowVisible ? "58dvh" : "48dvh",
  },
  position: "relative",
  ...Font_DoHyeon(),
  color: "black",
}));

// 지도
export const Maps = styled.div({
  width: "95%",
  height: "88%",
  "@media(min-width: 550px)": {
    borderRadius: 15,
  },
  "@media(max-width: 550px)": {
    width: "98%",
    height: "100%",
    marginBottom: 15,
  },
});

// 버스 관련 정보
export const BusInfo = styled.div({
  position: "absolute",
  top: 8,
  color: "white",
  left: 30,
  zIndex: 2,
  fontSize: 15,
  "@media(max-width: 1024px)": {
    fontSize: 13,
  },
});

// 업데이트 관련 컴포넌트 wrap
export const UpdateWrap = styled.div({
  position: "absolute",
  color: "white",
  "@media(min-width: 551px)": {
    top: 3,
  },
  "@media(max-width: 550px)": {
    bottom: -20,
  },
  right: 20,
  ...flex("row", "center", "center"),
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
  color: white;
  animation-name: ${(props) => (props.isBusInfoUpdated ? "none" : rotateOnce)};
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 15px;
  }
`;

// 데이터 제공 시간
export const DataTm = styled.p({
  fontSize: 15,
  margin: 0,
  marginRight: 5,
  "@media(max-width: 1024px)": {
    fontSize: 13,
  },
  "@media(max-width: 550px)": {
    fontSize: 15,
    marginRight: 0,
  },
  "@media(max-width: 550px)": {
    fontSize: 13,
  },
});
