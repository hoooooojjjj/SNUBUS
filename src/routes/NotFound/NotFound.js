import React from "react";
import { NotFoundContainer, NotFoundTextWrap } from "./NotFonudStyle";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTextWrap>
        <h1>404</h1>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
      </NotFoundTextWrap>
    </NotFoundContainer>
  );
};

export default NotFound;
