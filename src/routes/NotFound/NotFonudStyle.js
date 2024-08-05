import styled from "@emotion/styled";
import { Font_DoHyeon, flex } from "../../util/publicStyleComponents";

export const NotFoundContainer = styled.div({
  ...Font_DoHyeon(),
  backgroundColor: "#1a1919",
  width: "100dvw",
  height: "100dvh",
  ...flex("column", "center", "center"),
});

export const NotFoundTextWrap = styled.div({
  ...flex("column", "center", "center"),
});
