import styled from "@emotion/styled";
import { flex } from "../../util/publicStyleComponents";

export const Container = styled.div({
  width: "100dvw",
  height: "auto",
  overflow: "hidden",
  background: "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.6))",
});

export const ViewWrap = styled.div({
  overflowY: "scroll",
  msOverflowStyle: "none" /* Internet Explorer */,
  scrollbarWidth: "none" /* Firefox */,
  "&::-webkit-scrollbar": {
    display: "none",
  },

  marginTop: 10,
  borderTop: "2px solid #363636",
  ...flex("row", "center", "center"),
  "@media(max-width: 550px)": {
    flexDirection: "column",
  },
});
