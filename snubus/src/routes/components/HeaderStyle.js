import styled from "@emotion/styled";
import { flex, Font_ArchivoBlack } from "../../util/publicStyleComponets";

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
});

// 헤더 안에 nav
export const NavigationWrap = styled.nav({
  width: "100%",
  ...flex("row", "flex-end", "nomal"),
});

// 헤더 안에 로고 폰트
export const LogoText = styled.p({
  ...Font_ArchivoBlack(),
  fontWeight: 400,
  marginLeft: 30,
  marginBottom: 0,
  fontSize: 30,
  cursor: "pointer",
});

// // 헤더 안 로고 이미지
// export const HeaderLogo = styled.img({
//   marginLeft: 70,
//   height: 50,
//   cursor: "pointer",
// });
