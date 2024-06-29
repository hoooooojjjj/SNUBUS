import React from "react";
import Headers from "./components/Header";
import Parallax from "./components/Parallax";
const Intro = () => {
  return (
    <>
      <Headers isMain={false} fixed={"fixed"} />
      <Parallax />
    </>
  );
};

export default Intro;
