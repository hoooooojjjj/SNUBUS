import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {
  flex,
  container,
  Font_Kanit,
  Font_DoHyeon,
} from "../../util/publicStyleComponents";

const slideInEllipticLeftBck = keyframes`
  0% {
    transform: translateX(-800px) rotateY(-30deg) scale(6.5);
    transform-origin: 200% 50%;
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotateY(0) scale(1);
    transform-origin: -600px 50%;
    opacity: 1;
  }
  }
`;

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
  zIndex: 100,
  ...container(),
  ...flex("column", "center", "center"),
  backgroundImage: `url(${process.env.PUBLIC_URL + `assets/introImg0.jpg`})`,
  backgroundSize: "cover",
  "::before": {
    position: "absolute",
    content: '""',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  animation: `${fadeOut} 1s ease-out 3s both`,
});

export const WelcomeHeader = styled.p({
  zIndex: 100,
  animation: `${slideInEllipticRightBck} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  ...Font_Kanit(),
  marginBottom: 0,
  fontSize: 60,
  "@media(max-width: 595px)": {
    fontSize: 40,
  },
  "@media(max-width: 358px)": {
    fontSize: 30,
  },
  ...flex("column", "center", "center"),
});

export const WelcomeText = styled.p({
  zIndex: 100,
  animation: `${slideInEllipticLeftBck} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  ...Font_DoHyeon(),
  fontSize: 25,
  "@media(max-width: 595px)": {
    fontSize: 20,
  },
  "@media(max-width: 358px)": {
    fontSize: 15,
  },
});
