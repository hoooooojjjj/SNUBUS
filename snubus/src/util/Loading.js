import React from "react";
import { Spin } from "antd";
import { LoadingContainer, LoadingWrap, LogoStyle } from "./utilStyle";

function Loading() {
  return (
    <LoadingContainer>
      <LoadingWrap>
        <LogoStyle src={process.env.PUBLIC_URL + "assets/Logo.png"} />
      </LoadingWrap>
    </LoadingContainer>
  );
}

export default Loading;
