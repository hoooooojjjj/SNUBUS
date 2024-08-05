import React from "react";
import { HeaderWrap, Header, LogoText, NavigationWrap } from "./HeaderStyle";
import Navigation from "./components/Nav";
import { useNavigate } from "react-router-dom";

function Headers({ isMain, fixed }) {
  const nav = useNavigate();

  return (
    <HeaderWrap fixed={fixed}>
      <Header>
        <LogoText
          onClick={() => {
            nav("/");
          }}
        >
          SNUBUS
        </LogoText>
        <NavigationWrap>
          <Navigation isMain={isMain} />
        </NavigationWrap>
      </Header>
    </HeaderWrap>
  );
}

export default Headers;
