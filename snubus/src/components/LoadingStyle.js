import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import {
  flex,
  container,
  Font_ArchivoBlack,
} from "../util/publicStyleComponents";
// 로딩창 컨테이너
export const LoadingContainer = styled.div((props) => ({
  display: props.display,
  zIndex: 10,
  ...container(),
  backgroundColor: "rgba(0, 0, 0, 0.2)",
}));

// 로딩 wrap
export const LoadingWrap = styled.div({
  ...flex("column", "center", "center"),
  width: "100%",
  height: "100%",
  zIndex: 1,
});

// logo 스타일링
export const LogoStyle = styled.p({
  ...Font_ArchivoBlack(),
  fontSize: 50,
  position: "relative",
});

// blackWave 애니메이션 정의
const blackWave = keyframes`
  0% {
    width: 0%;
    border-radius: 0px;
  }
  20% {
    width: 20%;
    border-radius: 20px;
  }
  40% {
    width: 40%;
    border-radius: 50px;
  }
  60% {
    width: 60%;
    border-radius: 50px;
  }
  80% {
    width: 80%;
    border-radius: 20px;
  }
  100% {
    width: 100%;
    border-radius: 0px;
  }

`;

// logo 위에 씌워질 요소
export const LogoCover = styled.span({
  backgroundColor: "rgb(0,0,0,0.6)",
  position: "absolute",
  width: "100%",
  height: "100%",
  animation: `${blackWave} 0.7s alternate linear infinite`,
});
