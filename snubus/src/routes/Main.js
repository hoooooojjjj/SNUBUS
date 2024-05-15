import React from "react";
import { Containers, MainWrap } from "./MainStyle";
import Headers from "./components/Header";
import Footers from "./components/Footer";
import Articles from "./components/Article";
import busInfo from "../busInfo";

// 메인 페이지
function Main() {
  return (
    <Containers>
      <Headers />
      <MainWrap>
        {busInfo.map((info, i) => (
          <Articles key={i} info={info} />
        ))}
      </MainWrap>
      <Footers />
    </Containers>
  );
}

export default Main;
