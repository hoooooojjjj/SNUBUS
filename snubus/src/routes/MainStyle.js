import styled from "@emotion/styled";

// 메인 페이지 컨테이너
export const Containers = styled.div({
  width: "100dvw",
  height: "100dvh",
});
// 헤더 wrap
export const HeaderWrap = styled.header({
  width: "100%",
  height: "180px",
});

// 헤더 안에 광고
export const AdTop = styled.section({
  height: "60%",
  backgroundColor: "#D8D8D8",
});

// 헤더
export const Header = styled.section({
  height: "40%",
  display: "flex",
  alignItems: "center",
});

// 헤더 안에 nav
export const NavigationWrap = styled.nav({
  height: "100%",
  display: "flex",
  alignItems: "center",
});

// 헤더 안 로고 이미지
export const HeaderLogo = styled.img({
  marginLeft: 70,
  height: "100%",
  height: 50,
});

export const FloatWrap = styled.div({
  display: "flex",
  width: "100%",
});
export const ADLeft = styled.aside({
  width: "12%",
  height: 600,
  backgroundColor: "#D8D8D8",
});

export const ADRight = styled.aside({
  width: "12%",
  height: 600,
  backgroundColor: "#D8D8D8",
});

export const MainWrap = styled.main({
  width: "76%",
  height: "100%",
});
