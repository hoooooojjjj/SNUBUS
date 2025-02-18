import styled from "@emotion/styled";
import { Font_DoHyeon, flex } from "../../../../util/publicStyleComponents";
import { keyframes } from "@emotion/react";

// Map 컴포넌트 컨테이너
export const Container = styled.div((props) => ({
  width: "70dvw",
  height: "90dvh",
  ...flex("row", "center", "center"),
  "@media(max-width: 550px)": {
    width: "100dvw",
    height: props.isInfoWindowVisible ? "58dvh" : "48dvh",
    ...flex("column", "center", "center"),
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

export const MapHeader = styled.div({
  ...flex("row-reverse", "space-between", "center"),
  boxSizing: "border-box",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: 50,
  paddingLeft: 30,
  paddingRight: 10,
  "@media(max-width: 550px)": {
    position: "relative",
    paddingLeft: 0,
    paddingRight: 0,
  },
});

// 버스 관련 정보
export const BusInfo = styled.div({
  color: "white",
  left: 30,
  zIndex: 2,
  fontSize: 15,
  ...flex("row", "center", "center"),
  gap: 5,
  "@media(max-width: 1024px)": {
    fontSize: 13,
  },
  "@media(max-width: 550px)": {
    display: "none",
  },
});

// 업데이트 관련 컴포넌트 wrap
export const UpdateWrap = styled.div({
  borderRadius: "12px",
  padding: "10px 16px",
  color: "white",
  ...flex("row", "center", "center"),
  gap: "12px",
  "@media(max-width: 550px)": {
    gap: 0,
  },
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-1px)",
  },
});

// rotateOnce 애니메이션 정의
const rotateOnce = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 업데이트 버튼
export const UpdateBtn = styled.button`
  background: none;
  border: none;
  color: #4fd1c5;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${(props) =>
    props.isBusInfoUpdated ? "none" : `${rotateOnce} 1s linear infinite`};

  &:hover {
    background: rgba(79, 209, 197, 0.1);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

// 데이터 제공 시간
export const DataTm = styled.p({
  fontSize: 15,
  margin: 0,
  fontWeight: "500",
  letterSpacing: "0.02em",
  color: "rgba(255, 255, 255, 0.9)",

  "@media(max-width: 1024px)": {
    fontSize: 13,
  },

  "& span": {
    color: "#4FD1C5",
    fontWeight: "600",
  },
});
