import styled from "@emotion/styled";
import { Font_BlackHanSans, flex } from "../../util/publicStyleComponets";

// article wrap
export const Article = styled.article({
  width: "50dvw",
  height: "80%",
  "@media(max-width: 425px)": {
    width: "100dvw",
    height: "80%",
    ...flex("column", "center", "center"),
  },
  ...flex("column", "center", "normal"),
});

// // article headerwrap
export const HeaderWrap = styled.div({
  width: "70%",
  height: 40,
  margin: "0 auto",
  ...flex("row", "nomal", "nomal"),
  "@media(max-width: 425px)": {
    fontSize: 30,
    width: "100%",
    ...flex("row", "center", "nomal"),
    marginLeft: 10,
  },
  marginBottom: 10,
});

// article img
export const Img = styled.img({
  width: 50,
  height: 50,
  "@media(max-width: 768px)": {
    width: 40,
    height: 40,
  },
  "@media(max-width: 425px)": {
    width: 35,
    height: 35,
  },
  "@media(max-width: 320px)": {
    width: 30,
    height: 30,
  },
  marginTop: 5,
});

// article header
export const H2 = styled.h2({
  marginTop: 3,
  marginLeft: 20,
  ...Font_BlackHanSans(),
  fontSize: 50,
  "@media(max-width: 768px)": {
    fontSize: 40,
    marginLeft: 10,
  },
  "@media(max-width: 425px)": {
    fontSize: 35,
    marginLeft: 10,
  },
  "@media(max-width: 320px)": {
    fontSize: 30,
    marginLeft: 10,
  },
});

// article p
export const P = styled.p({
  width: "70%",
  margin: "0 auto",
  marginBottom: 10,
  ...Font_BlackHanSans(),
  fontSize: 40,
  "@media(max-width: 768px)": {
    fontSize: 30,
    marginBottom: 0,
  },
  "@media(max-width: 425px)": {
    margin: 0,
    textAlign: "center",
    marginLeft: 10,
    fontSize: 30,
    marginBottom: 0,
  },
  "@media(max-width: 320px)": {
    fontSize: 25,
  },
});
