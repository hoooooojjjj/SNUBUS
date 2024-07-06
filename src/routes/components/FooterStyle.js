import styled from "@emotion/styled";
import { flex, Font_NanumSquare } from "../../util/publicStyleComponents";

/* footer */
export const Footer = styled.footer({
  width: "100%",
  height: "10dvh",
  "@media(max-width: 550px)": {
    height: "15dvh",
  },
  ...flex("column", "flex-end", "center"),
  ...Font_NanumSquare(),
});

export const FooterPWrap = styled.div({
  ...flex("column", "center", "center"),
});

export const FooterP = styled.p({
  zIndex: 11,
  margin: 5,
  color: "white",
  "@media(max-width: 768px)": {
    fontSize: 13,
  },
  "@media(max-width: 550px)": {
    fontSize: 12,
  },
  "@media(max-width: 320px)": {
    fontSize: 10,
  },
});
