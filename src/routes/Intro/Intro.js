import React, { useContext, useEffect, useState } from "react";
import Headers from "../components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import { hasVisitedContext } from "../../App";
import Parallax from "./components/Parallax/Parallax";

/* - Intro 컴포넌트
    - 이 컴포넌트가 하는 일 나열
        1. 처음 방문인지 판별 후 처음 방문이면 Welcome 컴포넌트를 렌더링
            1. Component 기능으로 분리 →  Welcome 컴포넌트
        2. N번째 방문이면 Parallax 컴포넌트 렌더링
            1. Component 기능으로 분리 →  Parallax 컴포넌트
    - Parallax 컴포넌트
        - 이 컴포넌트가 하는 일 나열
            1. Scene1 렌더링
                1. Component 기능으로 분리 →  Scene1 컴포넌트
            2.  Scene2 렌더링
                1. Component 기능으로 분리 →  Scene2 컴포넌트
            3. Scene3 렌더링
                1. Component 기능으로 분리 →  Scene3 컴포넌트
            4. Scene4 렌더링
                1. Component 기능으로 분리 →  Scene4 컴포넌트
            5. Scene5 렌더링
                1. Component 기능으로 분리 →  Scene5 컴포넌트
            6. Scene6 렌더링
                1. Component 기능으로 분리 →  Scene6 컴포넌트 */

// 처음 방문인지 아닌지 판단하는 커스텀 훅
const useHasVisited = () => {
  // Welcome 컴포넌트를 처음에만 보여줄 state
  const [showWelcome, setShowWelcome] = useState(false);

  const [hasVisited, setHasVisited] = useContext(hasVisitedContext);

  useEffect(() => {
    // 처음 방문이면
    if (hasVisited === null) {
      // Welcome 컴포넌트를 보여줌
      setShowWelcome(true);

      // 3초 후 Welcome 컴포넌트를 숨김
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 3000);

      // sessionStorage에 저장된 hasVisited 값을 가져와서 setHasVisited로 hasVisited state를 업데이트
      setHasVisited(sessionStorage.getItem("hasVisited"));

      // timer를 clear하는 함수
      return () => clearTimeout(timer);
    }
  }, []);

  return showWelcome;
};

// Intro 페이지 컴포넌트
const Intro = () => {
  const showWelcome = useHasVisited();

  return (
    <div className="scroll" style={{ scrollbarWidth: "none" }}>
      {showWelcome ? (
        <Welcome />
      ) : (
        <>
          <Headers isMain={false} fixed={"fixed"} />
          <Parallax />
        </>
      )}
    </div>
  );
};

export default Intro;
