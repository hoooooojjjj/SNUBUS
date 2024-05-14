import styled from "@emotion/styled";
import { flex } from "../../util/publicStyleComponets";

// article wrap
export const Article = styled.article({
  height: 600,
  ...flex("column", "center", "normal"),
});

export const HeaderWrap = styled.div({
  width: "70%",
  height: 40,
  margin: "0 auto",
  marginBottom: 10,
  ...flex("row", "nomal", "center"),
});

// article img
export const Img = styled.img({
  width: 30,
  height: 30,
});

// article header
export const H2 = styled.h2({
  marginTop: 3,
  marginLeft: 20,
});
