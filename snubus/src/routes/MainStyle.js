import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { flex } from "../util/publicStyleComponets";

// fadeOut 애니메이션 정의
const fadeOut = keyframes`
  0% {
    opacity: 1;
    background-color: black;
  }
  100% {
    opacity: 0;
    background-color: transparent;
  }
`;

// 메인 페이지 컨테이너
export const Containers = styled.div`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  background: url(${(props) =>
    process.env.PUBLIC_URL + `assets/backgroundImg${props.imgNum}.jpg`});
  background-size: cover;
  @media (max-width: 425px) {
    background: url(${(props) =>
      process.env.PUBLIC_URL +
      `assets/backgroundImg_short${props.imgNum}.jpg`});
    background-size: cover;
  }
`;

// 배경 전환 시 애니메이션 재실행될 요소
export const Overlay = styled.div`
  width: 100dvw;
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${fadeOut} 3s forwards;
`;

// ADLeft,ADRight,main,footer wrap
// export const FloatWrap = styled.div({
//   display: "flex",
//   width: "100%",
// });

// // 왼쪽 사이드바 광고
// export const ADLeft = styled.aside({
//   width: "12%",
//   backgroundColor: "#D8D8D8",
// });

// // 오른쪽 사이드바 광고
// export const ADRight = styled.aside({
//   width: "12%",
//   backgroundColor: "#D8D8D8",
// });

/* main */

// main wrap
export const MainWrap = styled.main({
  width: "100%",
  height: "80dvh",
  ...flex("column", "center", "normal"),
});
