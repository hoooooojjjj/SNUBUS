import React from "react";
import { HeaderWrap, Header, LogoText, NavigationWrap } from "./HeaderStyle";
import Navigation from "./Nav";
import { useNavigate } from "react-router-dom";

function Headers() {
  const nav = useNavigate();

  return (
    <HeaderWrap>
      <Header>
        <LogoText
          onClick={() => {
            nav("/");
          }}
        >
          SNUBUS
        </LogoText>
        <NavigationWrap>
          <Navigation />
        </NavigationWrap>
      </Header>
    </HeaderWrap>
  );
}

export default Headers;
