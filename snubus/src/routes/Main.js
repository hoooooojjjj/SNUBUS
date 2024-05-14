import React from "react";
import { Containers, FloatWrap, ADLeft, ADRight, MainWrap } from "./MainStyle";
import Headers from "./components/Header";
import Footers from "./components/Footer";
import Articles from "./components/Article";

// 메인 페이지
function Main() {
  return (
    <Containers>
      <Headers />
      <FloatWrap>
        <ADLeft></ADLeft>
        <MainWrap>
          <Articles info={{ id: "FeederBus", name: "지선 버스" }} />
          <Articles info={{ id: "MainlineBus", name: "간선 버스" }} />
          <Articles info={{ id: "ViligeBus", name: "마을 버스" }} />
        </MainWrap>
        <ADRight></ADRight>
      </FloatWrap>
      <Footers />
    </Containers>
  );
}

export default Main;
