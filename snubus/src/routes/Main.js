import React from "react";
import { Link } from "react-router-dom";
// 메인 페이지
function Main() {
  return (
    <div>
      <Link to={"/5511"}>5511</Link>
      <Link to={"/5513"}>5513</Link>
      <Link to={"/gwanak02"}>관악02</Link>
    </div>
  );
}

export default Main;
