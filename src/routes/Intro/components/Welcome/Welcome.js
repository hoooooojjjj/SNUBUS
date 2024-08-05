import React from "react";
import { WelcomeContainer, WelcomeHeader, WelcomeText } from "./WelcomeStyle";

// Welcome 컴포넌트(Intro 컴포넌트 하위)
function Welcome() {
  return (
    <WelcomeContainer>
      <WelcomeHeader>SNUBUS</WelcomeHeader>
      <WelcomeText>"서울대에서 당신의 이동이 '더 -' 하도록"</WelcomeText>
    </WelcomeContainer>
  );
}

export default Welcome;
