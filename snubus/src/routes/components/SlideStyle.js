import styled from "@emotion/styled";
import { Font_BlackHanSans } from "../../util/publicStyleComponets";

const SlideItemWidth = "120px";

// 헤더 wrap
export const CarouselWrap = styled.header({
  width: "100dvw",
  height: "40%",
});

// 슬라이드 컴포넌트
export const SlideItem = styled.div({
  height: SlideItemWidth,
  background:
    "radial-gradient(circle, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.0) 70%)",
  borderRadius: 10,
});

// 슬라이드 안에 텍스트 컴포넌트
export const SlideText = styled.p({
  margin: "0 auto",
  width: "70%",
  textAlign: "center",
  ...Font_BlackHanSans(),
  lineHeight: SlideItemWidth,
  height: SlideItemWidth,
  fontSize: 40,
});
