import styled from "@emotion/styled";
import { Carousel } from "antd";
import { flex, Font_BlackHanSans } from "../../util/publicStyleComponents";

const SlideItemHeight = "120px";
const SlideItemHeight_under485 = "100px";
const SlideItemHeight_under425 = "90px";

// Carousel wrap
export const CarouselWrap = styled.header({
  width: "100dvw",
  height: "40%",
});

export const StyledCarousel = styled(Carousel)`
  width: 40%;
  margin: 0 auto;
  @media (max-width: 425px) {
    width: 85%;
  }
`;

// 슬라이드 컴포넌트
export const SlideItem = styled.div({
  height: SlideItemHeight,
  "@media(max-width: 485px)": {
    height: SlideItemHeight_under485,
  },
  "@media(max-width: 425px)": {
    height: SlideItemHeight_under425,
  },
  background:
    "radial-gradient(circle, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.0) 70%)",
  borderRadius: 10,
});

// 슬라이드 안에 텍스트 컴포넌트
export const SlideText = styled.p({
  ...flex("column", "center", "center"),
  margin: "0 auto",
  width: "70%",
  lineHeight: SlideItemHeight,
  ...Font_BlackHanSans(),
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
  "@media(max-width: 425px)": {
    fontSize: 30,
    lineHeight: SlideItemHeight_under425,
  },
  "@media(max-width: 320px)": {
    lineHeight: SlideItemHeight_under425,
    fontSize: 25,
  },
});
