import styled from "@emotion/styled";
import { flex } from "../../util/publicStyleComponents";

/* footer */
export const Footer = styled.footer({
  width: "100%",
  height: "10dvh",
  ...flex("row", "center", "flex-end"),
});

export const FooterPWrap = styled.div({
  ...flex("column", "center", "center"),
});

export const FooterP = styled.p({
  zIndex: 11,
  margin: 0,
  color: "white",
  "@media(max-width: 768px)": {
    fontSize: 13,
  },
  "@media(max-width: 425px)": {
    fontSize: 12,
  },
  "@media(max-width: 320px)": {
    fontSize: 10,
  },
});
