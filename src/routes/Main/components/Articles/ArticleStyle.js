import styled from "@emotion/styled";
import { Font_DoHyeon, flex } from "../../../../util/publicStyleComponents";
import { Carousel } from "antd";

// article wrap
export const Article = styled.article({
  zIndex: 1,
  WebkitUserSelect: "none" /* Safari */,
  MozUserSelect: "none" /* Firefox */,
  msUserSelect: "none" /* Internet Explorer/Edge */,
  userSelect:
    "none" /* Non-prefixed version, currently supported by Chrome, Edge, Opera, and Firefox */,
  width: "100dvw",
  height: "80%",
  "@media(max-width: 550px)": {
    width: "100dvw",
    height: "80%",
    ...flex("column", "center", "center"),
  },
  ...flex("column", "center", "normal"),
});

// article headerwrap
export const HeaderWrap = styled.div({
  width: "90%",
  height: 40,
  margin: "0 auto",
  ...flex("row", "nomal", "nomal"),
  "@media(max-width: 550px)": {
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
  "@media(max-width: 595px)": {
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
  marginLeft: 5,
  ...Font_DoHyeon(),
  fontSize: 50,
  "@media(max-width: 768px)": {
    fontSize: 40,
  },
  "@media(max-width: 595px)": {
    fontSize: 35,
  },
  "@media(max-width: 320px)": {
    fontSize: 30,
  },
});

// article p
export const P = styled.p({
  width: "90%",
  margin: "0 auto",
  marginTop: 10,
  marginBottom: 10,
  ...Font_DoHyeon(),
  fontSize: 40,
  "@media(max-width: 768px)": {
    fontSize: 30,
    marginBottom: 0,
  },
  "@media(max-width: 550px)": {
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

// Slide
const SlideItemHeight = "120px";
const SlideItemHeight_under485 = "100px";
const SlideItemHeight_under550 = "90px";

// Carousel wrap
export const CarouselWrap = styled.header({
  width: "100dvw",
  height: "35%",
  "@media (max-width: 550px)": {
    height: "30%",
  },

  background:
    "radial-gradient(circle, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.2) 70%)",
});

export const StyledCarousel = styled(Carousel)`
  width: 40%;
  margin: 0 auto;
  @media (max-width: 550px) {
    width: 85%;
  }
`;

// 슬라이드 컴포넌트
export const SlideItem = styled.div({
  height: SlideItemHeight,
  "@media(max-width: 485px)": {
    height: SlideItemHeight_under485,
  },
  "@media(max-width: 550px)": {
    height: SlideItemHeight_under550,
  },

  borderRadius: 20,
});

// 슬라이드 안에 텍스트 컴포넌트
export const SlideText = styled.p({
  ...flex("column", "center", "center"),
  margin: "0 auto",
  width: "70%",
  lineHeight: SlideItemHeight,
  ...Font_DoHyeon(),
  fontSize: 40,
  cursor: "pointer",
  "@media(max-width: 768px)": {
    fontSize: 35,
  },
  "@media(max-width: 650px)": {
    fontSize: 32,
  },
  "@media(max-width: 595px)": {
    fontSize: 25,
  },
  "@media(max-width: 485px)": {
    fontSize: 22,
    lineHeight: SlideItemHeight_under485,
  },
  "@media(max-width: 550px)": {
    fontSize: 30,
    lineHeight: SlideItemHeight_under550,
  },
  "@media(max-width: 320px)": {
    lineHeight: SlideItemHeight_under550,
    fontSize: 25,
  },
});
