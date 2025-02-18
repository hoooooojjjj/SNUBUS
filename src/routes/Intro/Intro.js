import React from "react";
import Headers from "../components/Header/Header";
import Parallax from "./components/Parallax/Parallax";

// Intro 페이지 컴포넌트
const Intro = () => {
  return (
    <div className="scroll" style={{ scrollbarWidth: "none" }}>
      <Headers isMain={false} fixed={"fixed"} />
      <Parallax />
    </div>
  );
};

export default Intro;
