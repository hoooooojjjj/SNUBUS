import styled from "@emotion/styled";
import { flex, Font_ArchivoBlack } from "../../util/publicStyleComponets";
// ul 태그
export const Ul = styled.ul({
  height: "100%",
  margin: 0,
  marginRight: 20,
  ...flex("row", "nomal", "nomal"),
});

// li 태그
export const Li = styled.li({
  fontWeight: 400,
  listStyle: "none",
  marginLeft: 80,
  fontSize: 20,
  cursor: "pointer",
  ...Font_ArchivoBlack(),
});
