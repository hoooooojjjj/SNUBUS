import React, { useContext } from "react";
import { Container } from "./StationInfoModalStyle";
import { isInfoWindowVisibleContext } from "../../../routes/View5511Bus";

const StationInfoModal = ({ curStation }) => {
  // infoWindow 열고 닫는 context
  const [isInfoWindowVisible, setIsInfoWindowVisible] = useContext(
    isInfoWindowVisibleContext
  );
  if (!isInfoWindowVisible) {
    return null;
  }
  return (
    <Container>
      <button
        onClick={() => {
          setIsInfoWindowVisible(false);
        }}
      >
        X
      </button>
      <h1>{curStation[0].stNm}</h1>
      <p>첫번째 버스 : {curStation[0].arrmsg1}</p>
      <p> 두번째 버스 : {curStation[0].arrmsg2}</p>
    </Container>
  );
};

export default StationInfoModal;
