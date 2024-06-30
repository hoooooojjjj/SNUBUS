import styled from "@emotion/styled";
import { flex, Font_Kanit } from "../../util/publicStyleComponents";

/* header */

// 헤더 wrap
export const HeaderWrap = styled.header((props) => ({
  width: "100%",
  height: "10dvh",
  "@media(max-width: 550px)": {
    height: "5dvh",
  },
  position: props.fixed || null,
  zIndex: 10,
}));

// 헤더
export const Header = styled.section({
  width: "100%",
  height: 72,
  "@media(max-width: 550px)": {
    height: 36,
  },
  ...flex("row", "normal", "center"),
});

// 헤더 안에 nav
export const NavigationWrap = styled.nav({
  width: "100%",
  ...flex("row", "flex-end", "normal"),
});

// 헤더 안에 로고 폰트
export const LogoText = styled.p({
  zIndex: 100,
  ...Font_Kanit(),
  marginLeft: 30,
  marginBottom: 0,
  fontWeight: 500,
  fontSize: 35,
  "@media(max-width: 595px)": {
    fontSize: 30,
    marginLeft: 20,
  },
  "@media(max-width: 485px)": {
    fontSize: 22,
    marginLeft: 10,
  },
  "@media(max-width: 358px)": {
    fontSize: 20,
    marginLeft: 5,
  },
  cursor: "pointer",
});
