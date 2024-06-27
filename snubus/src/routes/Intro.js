import React from "react";
import { Container, Intro1, Intro2, Intro3, Intro4 } from "./IntroStyle";
import Headers from "./components/Header";
import Footers from "./components/Footer";

const Intro = () => {
  return (
    <Container>
      <Headers fixed={"fixed"} isMain={false} />
      <Intro1></Intro1>
      <Intro2></Intro2>
      <Intro3></Intro3>
      <Intro4></Intro4>
    </Container>
  );
};

export default Intro;
