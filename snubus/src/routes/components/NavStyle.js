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
  marginTop: 6,
  marginLeft: 40,
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
  position: "relative",
  WebkitUserSelect: "none" /* Safari */,
  MozUserSelect: "none" /* Firefox */,
  msUserSelect: "none" /* Internet Explorer/Edge */,
  userSelect:
    "none" /* Non-prefixed version, currently supported by Chrome, Edge, Opera, and Firefox */,
});

export const BusTypeDropDownWrap = styled.div({
  position: "absolute",
  width: "140%",
  display: "flex",
  flexDirection: "column",
});

export const BusTypeDropDown = styled.div((props) => ({
  zIndex: 2,
  display: props.display,
  fontSize: 20,
  "@media(max-width: 735px)": {
    fontSize: 15,
  },
  "@media(max-width: 595px)": {
    fontSize: 13,
  },
  "@media(max-width: 485px)": {
    fontSize: 10,
  },
  "@media(max-width: 425px)": {
    fontSize: 10,
  },
  "@media(max-width: 320px)": {
    fontSize: 9,
  },
}));
