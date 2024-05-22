import React from "react";
import {
  LoadingContainer,
  LoadingWrap,
  LogoStyle,
  LogoCover,
} from "./LoadingStyle";

function Loading({ display }) {
  return (
    <LoadingContainer display={display}>
      <LoadingWrap>
        <LogoStyle>
          <LogoCover></LogoCover>SNUBUS
        </LogoStyle>
      </LoadingWrap>
    </LoadingContainer>
  );
}

export default Loading;
