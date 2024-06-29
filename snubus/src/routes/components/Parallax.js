import React from "react";
import { Scene, Header, SceneHeaderH1 } from "./ParallaxStyle";

const Parallax = () => (
  <>
    <Scene className="one">
      <Header>
        <SceneHeaderH1>Lorem ipsum dolor sit amet.</SceneHeaderH1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam suscipit
        sint ab beatae nihi
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
