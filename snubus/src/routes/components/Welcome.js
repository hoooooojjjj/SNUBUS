import React from "react";
import { WelcomeContainer, WelcomeHeader, WelcomeText } from "./WelcomeStyle";

function Welcome() {
  return (
    <WelcomeContainer>
      <WelcomeHeader>SNUBUS</WelcomeHeader>
      <WelcomeText>"더 편안한 학교생활을 위해"</WelcomeText>
    </WelcomeContainer>
  );
}

export default Welcome;
