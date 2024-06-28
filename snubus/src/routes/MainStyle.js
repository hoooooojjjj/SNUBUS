import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { flex } from "../util/publicStyleComponents";

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

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

// kenburns-bottom 애니메이션 정의
const kenburnsBottom = keyframes`
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
            transform-origin: 50% 84%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(15px);
            transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
  }
`;

// 메인 페이지 컨테이너
export const Containers = styled.div`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) =>
      process.env.PUBLIC_URL + `assets/backgroundImg${props.imgNum}.jpg`});
    background-size: cover;
    animation: ${kenburnsBottom} 5s ease-out both;

    @media (max-width: 550px) {
      background: url(${(props) =>
        process.env.PUBLIC_URL +
        `assets/backgroundImg_short${props.imgNum}.jpg`});
      background-size: cover;
    }
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

export const AniMationWrap = styled.div((props) => ({
  animation: !props.hasVisited ? `${fadein} 0.5s ease-out 0.5s both` : "",
}));

/* main */

// main wrap
export const MainWrap = styled.main({
  width: "100%",
  height: "80dvh",
  ...flex("column", "center", "normal"),
});
