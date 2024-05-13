import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AdTop,
  Containers,
  Header,
  HeaderWrap,
  HeaderLogo,
  NavigationWrap,
  FloatWrap,
  ADLeft,
  ADRight,
  MainWrap,
} from "./MainStyle";
import Navigation from "../components/Nav";
import Slide from "../components/Slide";

// 메인 페이지
function Main() {
  const nav = useNavigate();

  return (
    <Containers>
      <HeaderWrap>
        <AdTop></AdTop>
        <Header>
          <HeaderLogo src={process.env.PUBLIC_URL + "assets/Logo.png"} />
          <NavigationWrap>
            <Navigation />
          </NavigationWrap>
        </Header>
      </HeaderWrap>
      <FloatWrap>
        <ADLeft></ADLeft>
        <MainWrap>
          <h3>지선 버스</h3>
          <Slide />
        </MainWrap>
        <ADRight></ADRight>
      </FloatWrap>
    </Containers>
  );
}

export default Main;
