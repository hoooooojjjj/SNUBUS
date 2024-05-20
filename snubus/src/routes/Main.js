import React, { useEffect, useState } from "react";
import { Containers, Overlay, MainWrap } from "./MainStyle";
import Headers from "./components/Header";
import Footers from "./components/Footer";
import Articles from "./components/Article";
import busInfo from "../busInfo";

// imgNum state를 전달하는 context API
export const imgNumContext = React.createContext();

// 메인 페이지
function Main() {
  // 배경이미지를 변경할 때 배경이미지 번호 state
  const [imgNum, setImgNum] = useState(0);

  // 리렌더링시 애니메이션 재실행시키기 위한 상태
  const [key, setKey] = useState(0);

  // imgNum이 변경되면(배경 이미지가 전환되면) key를 변경시켜 Overlay 컴포넌트를 리렌더링시킨다.
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [imgNum]);

  return (
    <imgNumContext.Provider value={[imgNum, setImgNum]}>
      <Containers imgNum={imgNum}>
        <Overlay key={key}></Overlay>
        <Headers />
        <MainWrap>
          <Articles info={busInfo[imgNum]} />
        </MainWrap>
        <Footers />
      </Containers>
    </imgNumContext.Provider>
  );
}

export default Main;
