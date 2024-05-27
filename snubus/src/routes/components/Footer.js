import React from "react";
import { Footer, FooterP, FooterPWrap } from "./FooterStlye";
import { Link } from "react-router-dom";

function Footers() {
  return (
    <Footer>
      <FooterPWrap>
        <FooterP>ⓒSONO. All rights reserved.</FooterP>
        <FooterP>
          저작자 :
          <Link to="https://www.flaticon.com/kr/free-icons/-">마커</Link>
        </FooterP>
      </FooterPWrap>
    </Footer>
  );
}

export default Footers;
