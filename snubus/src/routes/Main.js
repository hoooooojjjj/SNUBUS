import React, { useEffect, useState } from "react";
import { Containers, Overlay, MainWrap } from "./MainStyle";
import Headers from "./components/Header";
import Footers from "./components/Footer";
import Articles from "./components/Article";
import busInfo from "../busInfo";
import useStore_imgNum from "../store/imgNumStore";

// 메인 페이지
function Main() {
  // zustand -> imgNum 상태 가져오기
  const imgNum = useStore_imgNum().imgNum;

  // 리렌더링시 애니메이션 재실행시키기 위한 상태
  const [key, setKey] = useState(0);

  // imgNum이 변경되면(배경 이미지가 전환되면) key를 변경시켜 Overlay 컴포넌트를 리렌더링시킨다.
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [imgNum]);

  return (
    <Containers imgNum={imgNum}>
      <Overlay key={key}></Overlay>
      <Headers />
      <MainWrap>
        <Articles info={busInfo[imgNum]} />
      </MainWrap>
      <Footers />
    </Containers>
  );
}

export default Main;
