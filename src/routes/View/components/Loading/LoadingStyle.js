import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {
  flex,
  Font_Kanit,
  Font_DoHyeon,
} from "../../../../util/publicStyleComponents";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// 로딩창 컨테이너
export const LoadingContainer = styled.div((props) => ({
  display: props.display,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(17, 24, 39, 0.98)",
  backdropFilter: "blur(8px)",
  animation: `${fadeIn} 0.3s ease-in-out`,
  overflow: "hidden",
}));

// 로딩 wrap
export const LoadingWrap = styled.div({
  ...flex("column", "center", "center"),
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  padding: "20px",
});

export const LogoStyle = styled.p({
  ...Font_Kanit(),
  fontWeight: 700,
  fontSize: 60,
  color: "#fff",
  textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
  animation: `${pulse} 2s ease-in-out infinite`,
  marginBottom: "2rem",
  textAlign: "center",
  "@media(max-width: 1024px)": {
    fontSize: 50,
  },
  "@media(max-width: 768px)": {
    fontSize: 45,
  },
  "@media(max-width: 550px)": {
    fontSize: 40,
  },
  "@media(max-width: 320px)": {
    fontSize: 35,
  },
});

export const TMI = styled.p({
  ...Font_DoHyeon(),
  fontSize: 22,
  color: "#E5E7EB",
  lineHeight: 1.6,
  maxWidth: "600px",
  width: "90%",
  margin: "0 auto",
  wordBreak: "keep-all",
  textAlign: "center",
  opacity: 0.9,
  animation: `${fadeIn} 0.5s ease-in-out`,
  "&:first-of-type": {
    marginBottom: "1rem",
    color: "#9CA3AF",
  },
  "@media(max-width: 1024px)": {
    fontSize: 20,
  },
  "@media(max-width: 768px)": {
    fontSize: 18,
  },
  "@media(max-width: 550px)": {
    fontSize: 16,
  },
  "@media(max-width: 320px)": {
    fontSize: 14,
  },
});
