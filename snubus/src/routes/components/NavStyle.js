import styled from "@emotion/styled";
import { flex, Font_BlackHanSans } from "../../util/publicStyleComponets";
// ul 태그
export const Ul = styled.ul({
  height: "100%",
  margin: 0,
  marginRight: 20,
  "@media(max-width: 425px)": {
    marginRight: 10,
  },
  "@media(max-width: 320px)": {
    marginRight: 10,
  },
  ...flex("row", "nomal", "nomal"),
});

// li 태그
export const Li = styled.li({
  listStyle: "none",
  marginTop: 8,
  marginLeft: 80,
  fontSize: 25,
  "@media(max-width: 735px)": {
    marginTop: 3,
    marginLeft: 50,
    fontSize: 20,
  },
  "@media(max-width: 595px)": {
    marginTop: 3,
    marginLeft: 20,
    fontSize: 18,
  },
  "@media(max-width: 485px)": {
    marginTop: 3,
    marginLeft: 10,
    fontSize: 15,
  },
  "@media(max-width: 425px)": {
    marginTop: 3,
    marginLeft: 10,
    fontSize: 15,
  },
  "@media(max-width: 320px)": {
    marginTop: 2,
    marginLeft: 10,
    fontSize: 14,
  },
  cursor: "pointer",
  ...Font_BlackHanSans(),
  fontWeight: 400,
});
