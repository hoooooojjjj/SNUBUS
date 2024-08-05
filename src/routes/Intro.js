import React, { useContext, useEffect, useState } from "react";
import Headers from "./Main/components/Header/Header";
import Parallax from "./components/Parallax/Parallax";
import Welcome from "./Welcome/Welcome";
import { hasVisitedContext } from "../App";
const Intro = () => {
  // Welcome 컴포넌트를 처음에만 보여줄 state
  const [showWelcome, setShowWelcome] = useState(false);

  const [hasVisited, setHasVisited] = useContext(hasVisitedContext);

  useEffect(() => {
    // 처음 방문이면 Welcome 컴포넌트를 보여줌
    if (hasVisited === null) {
      setShowWelcome(true);

      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 3000);
      setHasVisited(sessionStorage.getItem("hasVisited"));
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
