import React from "react";
import { HeaderWrap, Header, LogoText, NavigationWrap } from "./HeaderStyle";
import Navigation from "./Nav";
import { useNavigate } from "react-router-dom";

function Headers() {
  const nav = useNavigate();

  // Link 태그 클릭 시 스무스 스크롤 적용
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <HeaderWrap>
      <Header>
        <LogoText
          onClick={() => {
            nav("/");
          }}
          src={process.env.PUBLIC_URL + "assets/Logo.png"}
        >
          SNUBUS
        </LogoText>
        <NavigationWrap>
          <Navigation handleScroll={handleScroll} />
        </NavigationWrap>
      </Header>
    </HeaderWrap>
  );
}

export default Headers;
