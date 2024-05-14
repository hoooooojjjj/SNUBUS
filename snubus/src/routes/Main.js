import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Containers,
  Header,
  HeaderWrap,
  HeaderLogo,
  NavigationWrap,
  FloatWrap,
  ADLeft,
  ADRight,
  MainWrap,
  Article,
  H2,
  Footer,
} from "./MainStyle";
import Navigation from "../components/Nav";
import Slide from "../components/Slide";

// 메인 페이지
function Main() {
  const nav = useNavigate();

  // Link 태그 클릭 시 스무스 스크롤 적용
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Containers>
      <HeaderWrap>
        {/* heaer */}
        <Header>
          <HeaderLogo
            onClick={() => {
              nav("/");
            }}
            src={process.env.PUBLIC_URL + "assets/Logo.png"}
          />
          <NavigationWrap>
            <Navigation handleScroll={handleScroll} />
          </NavigationWrap>
        </Header>
        {/* heaer */}
      </HeaderWrap>
      <FloatWrap>
        <ADLeft></ADLeft>
        {/* main */}
        <MainWrap>
          <Article id="FeederBus">
            <H2>지선 버스</H2>
            <Slide />
          </Article>
          <Article id="MainlineBus">
            <H2>간선 버스</H2>
            <Slide />
          </Article>
          <Article id="ViligeBus">
            <H2>마을 버스</H2>
            <Slide />
          </Article>
        </MainWrap>
        {/* main */}

        <ADRight></ADRight>
      </FloatWrap>{" "}
      {/* footer */}
      <Footer></Footer>
      {/* footer */}
    </Containers>
  );
}

export default Main;
