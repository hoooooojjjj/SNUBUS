import React from "react";
import { HeaderWrap, Header, LogoText, NavigationWrap } from "./HeaderStyle";
import Navigation from "./components/Nav";
import { useNavigate } from "react-router-dom";

// 로고 클릭 시 메인 페이지로 이동하는 커스텀 훅
function useLogoClick() {
  const nav = useNavigate();

  // 로고 클릭 시 메인 페이지로 이동하는 함수
  const onClickLogo = () => {
    nav("/main");
  };

  return onClickLogo;
}

// 메인 페이지 하위 Headers 컴포넌트
function Headers({ isMain, fixed }) {
  // 로고 클릭 시 메인 페이지로 이동하는 커스텀 훅
  const onClickLogo = useLogoClick();

  return (
    <HeaderWrap fixed={fixed}>
      <Header>
        <LogoText onClick={onClickLogo}>SNUBUS</LogoText>
        <NavigationWrap>
          <Navigation isMain={isMain} />
        </NavigationWrap>
      </Header>
    </HeaderWrap>
  );
}

export default Headers;
