import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {
  flex,
  container,
  Font_ArchivoBlack,
} from "../../util/publicStyleComponents";

const slideInEllipticRightBck = keyframes`
  0% {
    transform: translateX(800px) rotateY(30deg) scale(6.5);
    transform-origin: -100% 50%;
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotateY(0) scale(1);
    transform-origin: 600px 50%;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    background-color: #1a1919;
  }
  100% {
    opacity: 0;
    background-color: rgba(0,0,0,0);
  }
`;

export const WelcomeContainer = styled.div({
  ...container(),
  ...flex("column", "center", "center"),
  animation: `${fadeOut} 1s ease-out 2s both`,
});

export const WelcomeText = styled.p({
  animation: `${slideInEllipticRightBck} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  ...Font_ArchivoBlack(),
  fontSize: 60,
  "@media(max-width: 595px)": {
    fontSize: 40,
  },
  "@media(max-width: 358px)": {
    fontSize: 30,
  },
});
