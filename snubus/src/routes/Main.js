import React from "react";
import { Containers, FloatWrap, ADLeft, ADRight, MainWrap } from "./MainStyle";
import Headers from "./components/Header";
import Footers from "./components/Footer";
import Articles from "./components/Article";
import busInfo from "../busInfo";

// 메인 페이지
function Main() {
  return (
    <Containers>
      <Headers />
      <FloatWrap>
        <ADLeft></ADLeft>
        <MainWrap>
          {busInfo.map((info) => (
            <Articles info={info} />
          ))}
        </MainWrap>
        <ADRight></ADRight>
      </FloatWrap>
      <Footers />
    </Containers>
  );
}

export default Main;
