import styled from "@emotion/styled";
import { flex, container } from "../util/publicStyleComponets";
// 로딩창 컨테이너
export const LoadingContainer = styled.div({
  ...container(),
  backgroundColor: "rgba(0, 0, 0, 0.2)",
});

// 로딩 wrap
export const LoadingWrap = styled.div({
  ...flex("column", "center", "center"),
  width: "100%",
  height: "100%",
  zIndex: 1,
});

// logo 스타일링
export const LogoStyle = styled.img`
  width: 100px;
  height: 100px;
  animation: upDown 0.8s linear infinite;
  @keyframes upDown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
