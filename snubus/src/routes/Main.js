import React from "react";
import { Containers, MainWrap } from "./MainStyle";
import Headers from "./components/Header";
import Footers from "./components/Footer";
import Articles from "./components/Article";
import busInfo from "../busInfo";
import useStore_imgNum from "../store/imgNumStore";

// 메인 페이지
function Main() {
  // zustand -> imgNum 상태 가져오기
  const imgNum = useStore_imgNum().imgNum;
  return (
    <Containers imgNum={imgNum}>
      <Headers />
      <MainWrap>
        <Articles info={busInfo[0]} />
      </MainWrap>
      <Footers />
    </Containers>
  );
}

export default Main;
