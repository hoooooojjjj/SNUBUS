import React from "react";
import Headers from "./components/Header";
import Parallax from "./components/Parallax/Parallax";
const Intro = () => {
  return (
    <div className="scroll" style={{ scrollbarWidth: "none" }}>
      <Headers isMain={false} fixed={"fixed"} />
      <Parallax />
    </div>
  );
};

export default Intro;
