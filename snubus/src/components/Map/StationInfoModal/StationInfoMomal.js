import React from "react";
import { Container } from "./StationInfoMomalStyle";

const StationInfoModal = ({ curStation }) => {
  return (
    <Container>
      <h1>{curStation[0].stNm}</h1>
      <p>
        {curStation[0].arrmsg1} |{curStation[0].arrmsg2}
      </p>
    </Container>
  );
};

export default StationInfoModal;
