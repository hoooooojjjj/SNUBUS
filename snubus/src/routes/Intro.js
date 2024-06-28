import React from "react";
import Headers from "./components/Header";
import Parallaxs from "./components/Parallax";
const Intro = () => {
  return (
    <>
      <Headers isMain={false} fixed={"fixed"} />
      <Parallaxs />
    </>
  );
};

export default Intro;
