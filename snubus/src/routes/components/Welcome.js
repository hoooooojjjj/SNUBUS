import React from "react";
import { WelcomeContainer, WelcomeHeader, WelcomeText } from "./WelcomeStyle";

function Welcome() {
  return (
    <WelcomeContainer>
      <WelcomeHeader>
        SNUBUS<WelcomeText>"더 편안한 학교생활을 위해"</WelcomeText>
      </WelcomeHeader>
    </WelcomeContainer>
  );
}

export default Welcome;
