import React, { useEffect, useState } from "react";
import { Containers, Overlay, MainWrap, AniMationWrap } from "./MainStyle";
import Headers from "./components/Header";
import Footers from "./components/Footer";
import Articles from "./components/Article";
import busInfo from "../util/busInfo";
import Welcome from "./components/Welcome";

// imgNum state를 전달하는 context API
export const imgNumContext = React.createContext();

// 메인 페이지
function Main() {
  // 배경이미지를 변경할 때 배경이미지 번호 state
  const [imgNum, setImgNum] = useState(0);

  // Welcome 컴포넌트를 처음에만 보여줄 state
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // sessionStorage에 'hasVisited' 키가 있는지 확인
    const hasVisited = sessionStorage.getItem("hasVisited");

    // 처음 방문이면 Welcome 컴포넌트를 보여주고, 'hasVisited'를 설정
    if (!hasVisited) {
      setShowWelcome(true);
      sessionStorage.setItem("hasVisited", "true");

      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <imgNumContext.Provider value={[imgNum, setImgNum]}>
      <Containers imgNum={imgNum}>
        {showWelcome && <Welcome />}
        <AniMationWrap hasVisited={sessionStorage.getItem("hasVisited")}>
          {/* imgNum이 변경되면(배경 이미지가 전환되면) key를 변경된 imgNum으로 변경시켜 Overlay 컴포넌트를 리렌더링시킨다. */}
          <Overlay key={imgNum}></Overlay>
          <Headers isMain={true} />
          <MainWrap>
            <Articles info={busInfo[imgNum]} />
          </MainWrap>
          <Footers />
        </AniMationWrap>
      </Containers>
    </imgNumContext.Provider>
  );
}

export default Main;
