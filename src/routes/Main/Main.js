import React, { useContext, useEffect, useState } from "react";
import { Containers, Overlay, MainWrap } from "./MainStyle";
import Headers from "./components/Header/Header";
import Footers from "./components/Footers/Footer";
import Articles from "./components/Articles/Article";
import busInfo from "../../json/busInfo.json";
import { useNavigate } from "react-router-dom";
import { hasVisitedContext } from "../../App";

// 처음 방문인지 아닌지 판단하는 커스텀 훅
function useHasVisited() {
  const nav = useNavigate();

  // 처음 방문인지 아닌지 판단하는 context API
  const [hasVisited, setHasVisited] = useContext(hasVisitedContext);

  useEffect(() => {
    // 처음 방문이면 intro 페이지로 이동
    if (hasVisited === null) {
      nav("/intro");
    }
  }, []);
}

// imgNum state를 전달하는 context API
export const imgNumContext = React.createContext();

// 메인 페이지
function Main() {
  // 처음 방문인지 아닌지 판단하는 커스텀 훅
  useHasVisited();

  // 배경이미지를 변경할 때 배경이미지 번호 state
  const [imgNum, setImgNum] = useState(0);

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
