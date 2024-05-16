import styled from "@emotion/styled";
import { Font_BlackHanSans, flex } from "../../util/publicStyleComponets";

// article wrap
export const Article = styled.article({
  width: "50dvw",
  height: "80%",
  ...flex("column", "center", "normal"),
});

// article img
export const Img = styled.img({
  width: 50,
  height: 50,
});

export const HeaderWrap = styled.div({
  width: "70%",
  height: 40,
  margin: "0 auto",
  marginBottom: 10,
  ...flex("row", "nomal", "center"),
});

// article header
export const H2 = styled.h2({
  marginTop: 3,
  marginLeft: 20,
  ...Font_BlackHanSans(),
  fontSize: 50,
});

// article p
export const P = styled.p({
  width: "70%",
  margin: "0 auto",
  marginBottom: 10,
  ...Font_BlackHanSans(),
  fontSize: 40,
});
