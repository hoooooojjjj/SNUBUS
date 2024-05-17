import React from "react";
import {
  LoadingContainer,
  LoadingWrap,
  LogoStyle,
  LogoCover,
} from "./LoadingStyle";

function Loading() {
  return (
    <LoadingContainer>
      <LoadingWrap>
        <LogoStyle>
          <LogoCover></LogoCover>SNUBUS
        </LogoStyle>
      </LoadingWrap>
    </LoadingContainer>
  );
}

export default Loading;
