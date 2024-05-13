import styled from "@emotion/styled";

export const LoadingContainer = styled.div({
  width: "100dvw",
  height: "100dvh",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
});
export const LoadingWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  zIndex: 1,
});
export const LogoStyle = styled.img`
bak
  width: 100px;
  height: 100px;
  animation: spin 1.5s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
