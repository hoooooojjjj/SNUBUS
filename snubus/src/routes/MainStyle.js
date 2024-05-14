import styled from "@emotion/styled";
import { flex, container } from "../util/publicStyleComponets";

// 메인 페이지 컨테이너
export const Containers = styled.div({
  ...container(),
});

/* header */

// 헤더 wrap
export const HeaderWrap = styled.header({
  width: "100%",
  height: "72px",
});

// 헤더
export const Header = styled.section({
  position: "fixed",
  width: "100%",
  height: 72,
  ...flex("row", "normal", "center"),
  backgroundColor: "#9cb4db",
});

// 헤더 안에 nav
export const NavigationWrap = styled.nav({
  height: "100%",
  ...flex("row", "normal", "center"),
});

// 헤더 안 로고 이미지
export const HeaderLogo = styled.img({
  marginLeft: 70,
  height: 50,
  cursor: "pointer",
});
// ADLeft,ADRight,main,footer wrap
export const FloatWrap = styled.div({
  display: "flex",
  width: "100%",
});

// 왼쪽 사이드바 광고
export const ADLeft = styled.aside({
  width: "12%",
  backgroundColor: "#D8D8D8",
});

// 오른쪽 사이드바 광고
export const ADRight = styled.aside({
  width: "12%",
  backgroundColor: "#D8D8D8",
});

/* main */

// main wrap
export const MainWrap = styled.main({
  width: "76%",
  ...flex("column", "center", "normal"),
  zIndex: -1,
});

// article wrap
export const Article = styled.article({
  height: 600,
  ...flex("column", "center", "normal"),
});

// article header
export const H2 = styled.h2({
  paddingTop: 50,
  width: "70%",
  margin: "0 auto",
  marginBottom: 20,
});

/* footer */
export const Footer = styled.footer({
  width: "100%",
  height: 100,
  backgroundColor: "#9cb4db",
  ...flex("row", "center", "center"),
});

export const FooterP = styled.p({});
