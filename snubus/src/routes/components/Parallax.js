import React from "react";
import { Scene, Header, SceneHeaderH1, SceneHeaderH2 } from "./ParallaxStyle";
import { Overlay } from "../MainStyle";

const Parallax = () => (
  <>
    <Overlay />
    <Scene className="one">
      <Header>
        <SceneHeaderH1>당신의 '이동'이 더 편안하도록</SceneHeaderH1>
        <SceneHeaderH2>To make your 'movement' more comfortable</SceneHeaderH2>
      </Header>
    </Scene>
    <Scene className="two">
      <Header>
        <SceneHeaderH1>Lorem ipsum dolor sit amet.</SceneHeaderH1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam suscipit
        sint ab beatae nihi
      </Header>
    </Scene>
    <Scene className="three">
      <Header>
        <SceneHeaderH1>Lorem ipsum dolor sit amet.</SceneHeaderH1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam suscipit
        sint ab beatae nihi
      </Header>
    </Scene>
  </>
);

export default Parallax;
