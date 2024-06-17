import React from "react";

const StationInfoModal = ({ curStation }) => {
  return (
    <div>
      <h1>{curStation[0].stNm}</h1>
      <p>
        {curStation[0].arrmsg1}
        {parseInt(curStation[0].isLast1) === 1 ? " (막차)" : ""} |
        {curStation[0].arrmsg2}
        {parseInt(curStation[0].isLast2) === 1 ? " (막차)" : ""}
      </p>
    </div>
  );
};

export default StationInfoModal;
