import React, { useContext, useEffect, useState } from "react";
import { Containers, Overlay, MainWrap } from "./MainStyle";
import Headers from "../components/Header/Header";
import Footers from "../components/Footers/Footer";
import Articles from "./components/Articles/Article";
import busInfo from "../../json/busInfo.json";
import { useNavigate } from "react-router-dom";
import { hasVisitedContext } from "../../App";

/* - Main 컴포넌트 (Main 페이지)
    1. 이 컴포넌트가 하는 일
        1. 처음 방문인지 아닌지 판단 후 처음 방문이면 intro 페이지로 이동
            1. Hooks 기능으로 분리 → useHasVisited() 커스텀 훅으로 분리
        2. Main 화면 렌더링(하위 : Headers, Articles, Footers 컴포넌트)
            1. Component 기능으로 분리 → Main 컴포넌트
        3. 배경이미지를 변경하는 imgNum state를 전달하는 context API를 만들고, Navigation 컴포넌트에 전달해 해당 컴포넌트에서 배경이미지를 변경할 때 배경이미지  변경
            1. Reducer 기능으로 분리 → Header - Navigation 컴포넌트로 분리 
*/

// 처음 방문인지 아닌지 판단하는 커스텀 훅
function useHasVisited() {
  const nav = useNavigate();

  // 처음 방문인지 아닌지 판단하는 context API
  const [hasVisited, setHasVisited] = useContext(hasVisitedContext);

  useEffect(() => {
    // 처음 방문이면 intro 페이지로 이동
    if (hasVisited === null) {
      // nav("/intro");
    }
  }, []);
}

// imgNum state를 전달하는 context API
export const imgNumContext = React.createContext();

// 메인 페이지 컴포넌트
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
