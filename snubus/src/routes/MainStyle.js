import styled from "@emotion/styled";
import { flex, container } from "../util/publicStyleComponets";

// 메인 페이지 컨테이너
export const Containers = styled.div((props) => ({
  background: `url(${
    process.env.PUBLIC_URL + `assets/backgroundImg${props.imgNum}.jpg`
  })`,
  backgroundSize: "cover",
  ...container(),
}));

// ADLeft,ADRight,main,footer wrap
// export const FloatWrap = styled.div({
//   display: "flex",
//   width: "100%",
// });

// // 왼쪽 사이드바 광고
// export const ADLeft = styled.aside({
//   width: "12%",
//   backgroundColor: "#D8D8D8",
// });

// // 오른쪽 사이드바 광고
// export const ADRight = styled.aside({
//   width: "12%",
//   backgroundColor: "#D8D8D8",
// });

/* main */

// main wrap
export const MainWrap = styled.main({
  width: "100%",
  height: "80dvh",
  ...flex("column", "center", "normal"),
});
