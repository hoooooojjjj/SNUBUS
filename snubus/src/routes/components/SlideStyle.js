import styled from "@emotion/styled";
import { flex, Font_BlackHanSans } from "../../util/publicStyleComponets";

const SlideItemWidth = "120px";

// 헤더 wrap
export const CarouselWrap = styled.header({
  width: "100dvw",
  height: "40%",
});

export const SlideItem = styled.div({
  height: SlideItemWidth,
});

export const SlideText = styled.p({
  margin: "0 auto",
  width: "70%",
  textAlign: "center",
  ...Font_BlackHanSans(),
  lineHeight: SlideItemWidth,
  height: SlideItemWidth,
  fontSize: 40,
});
