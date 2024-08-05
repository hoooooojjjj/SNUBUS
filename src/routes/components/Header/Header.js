import React from "react";
import { HeaderWrap, Header, LogoText, NavigationWrap } from "./HeaderStyle";
import Navigation from "./components/Nav";
import { useNavigate } from "react-router-dom";

/* - Headers 컴포넌트 (Main 페이지 하위)
    1. 이 컴포넌트가 하는 일
        1. isMain props로 메인 페이지인지 아닌지 판단하여 Navigation에 props로 넘겨줌
        2. fixed Props를 받아 이에 따라 HeaderWrap에 fixed 속성을 줌
        3.. Headers 컴포넌트 렌더링(하위 : Navigation 컴포넌트)
        4. LogoText를 클릭하면 메인 페이지로 이동
            1. Hooks 기능으로 분리 → useLogoClick() 커스텀 훅으로 분리 
*/

// 로고 클릭 시 메인 페이지로 이동하는 커스텀 훅
function useLogoClick() {
  const nav = useNavigate();

  // 로고 클릭 시 메인 페이지로 이동하는 함수
  const onClickLogo = () => {
    nav("/");
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
