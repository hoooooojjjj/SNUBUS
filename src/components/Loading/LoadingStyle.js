import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {
  flex,
  container,
  Font_Kanit,
  Font_DoHyeon,
} from "../../util/publicStyleComponents";
// 로딩창 컨테이너
export const LoadingContainer = styled.div((props) => ({
  display: props.display,
  position: "absolute",
  zIndex: 1000,
  ...container(),
  backgroundColor: "rgba(26, 25, 25, 1)",
  overflowBlock: "hidden",
}));

// 로딩 wrap
export const LoadingWrap = styled.div({
  ...flex("column", "center", "center"),
  width: "100%",
  height: "100%",
  zIndex: 1,
});
const rotateInVer = keyframes`
  0% {
    transform: perspective(800px) rotateY(-360deg) translateZ(-200px);
    opacity: 0;
  }
  100% {
    transform: perspective(800px) rotateY(0deg) translateZ(0);
    opacity: 1;
  }
`;

export const LogoStyle = styled.p({
  ...Font_Kanit(),
  fontWeight: 500,
  animation: `${rotateInVer} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both infinite`,
  fontSize: 50,
  position: "relative",
  "@media(max-width: 1024px)": {
    fontSize: 45,
  },
  "@media(max-width: 768px)": {
    fontSize: 40,
  },
  "@media(max-width: 550px)": {
    fontSize: 50,
  },
  "@media(max-width: 320px)": {
    fontSize: 45,
  },
});

export const TMI = styled.p({
  ...Font_DoHyeon(),
  fontSize: 20,
  "@media(max-width: 1024px)": {
    fontSize: 18,
  },
  "@media(max-width: 768px)": {
    fontSize: 16,
  },
  "@media(max-width: 550px)": {
    fontSize: 18,
    width: "80%",
    textAlign: "center",
  },
  "@media(max-width: 320px)": {
    fontSize: 16,
    width: "80%",
    textAlign: "center",
  },
});
