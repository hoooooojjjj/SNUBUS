import React, { useEffect, useState } from "react";
import Headers from "./components/Header";
import Parallax from "./components/Parallax/Parallax";
import { useNavigate } from "react-router-dom";
import Welcome from "./components/Welcome";
const Intro = () => {
  const nav = useNavigate();
  // Welcome 컴포넌트를 처음에만 보여줄 state
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // sessionStorage에 'hasVisited' 키가 있는지 확인
    const hasVisited = sessionStorage.getItem("hasVisited");

    // 처음 방문이면 Welcome 컴포넌트를 보여주고, 'hasVisited'를 설정
    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");

      setShowWelcome(true);

      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="scroll" style={{ scrollbarWidth: "none" }}>
      {showWelcome && <Welcome />}
      {!showWelcome ? (
        <>
          <Headers isMain={false} fixed={"fixed"} />
          <Parallax />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Intro;
