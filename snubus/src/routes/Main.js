import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdTop, Containers, Header, HeaderWrap, HeaderLogo } from "./MainStyle";
import Navigation from "../components/Nav";

// 메인 페이지
function Main() {
  const nav = useNavigate();

  return (
    <Containers>
      <HeaderWrap>
        <AdTop></AdTop>
        <Header>
          <HeaderLogo src={process.env.PUBLIC_URL + "assets/Logo.png"} />
          <nav>
            <Navigation />
          </nav>
        </Header>
      </HeaderWrap>
      <Link to={"/5511"}>5511</Link>
      <Link to={"/5513"}>5513</Link>
      <Link to={"/gwanak02"}>관악02</Link>
    </Containers>
  );
}

export default Main;
