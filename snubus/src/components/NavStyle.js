import styled from "@emotion/styled";
import { flex } from "../util/publicStyleComponets";
// ul 태그
export const Ul = styled.ul({
  height: "100%",
  margin: 0,
  ...flex("row", "nomal", "center"),
});

// li 태그
export const Li = styled.li({
  listStyle: "none",
  marginLeft: 20,
  fontSize: 20,
  cursor: "pointer",
});
