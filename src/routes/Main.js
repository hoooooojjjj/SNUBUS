import React, { useContext, useEffect, useState } from "react";
import { Containers, Overlay, MainWrap } from "./MainStyle";
import Headers from "./components/Header";
import Footers from "./components/Footer";
import Articles from "./components/Article";
import busInfo from "../json/busInfo";
import { useNavigate } from "react-router-dom";
import { hasVisitedContext } from "../App";

// imgNum state를 전달하는 context API
export const imgNumContext = React.createContext();

// 메인 페이지
function Main() {
  const nav = useNavigate();

  const [hasVisited, setHasVisited] = useContext(hasVisitedContext);
  // 배경이미지를 변경할 때 배경이미지 번호 state
  const [imgNum, setImgNum] = useState(0);

  useEffect(() => {
    // 처음 방문이면 intro 페이지로 이동
    if (hasVisited === null) {
      nav("/intro");
    }
  }, []);

  return (
    <imgNumContext.Provider value={[imgNum, setImgNum]}>
      <Containers key={imgNum} imgNum={imgNum}>
        {/* imgNum이 변경되면(배경 이미지가 전환되면) key를 변경된 imgNum으로 변경시켜 Overlay 컴포넌트를 리렌더링시킨다. */}
        <Overlay key={imgNum}></Overlay>
        <Headers isMain={true} />
        <MainWrap>
          <Articles info={busInfo[imgNum]} />
        </MainWrap>
        <Footers />
      </Containers>
    </imgNumContext.Provider>
  );
}

export default Main;