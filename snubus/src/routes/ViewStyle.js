import styled from "@emotion/styled";
import { flex } from "../util/publicStyleComponents";

export const Container = styled.div({
  width: "100dvw",
  height: "auto",
  overflow: "hidden",
});

export const ViewWrap = styled.div({
  ...flex("row", "center", "center"),
  "@media(max-width: 550px)": {
    flexDirection: "column",
  },
});
