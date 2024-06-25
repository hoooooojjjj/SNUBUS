import React, { useContext, useEffect } from "react";
import { Container, CloseBtn, Header, Text } from "./StationInfoModalStyle";
import { isInfoWindowVisibleContext } from "../../../routes/View5511Bus";
import { CaretDownOutlined } from "@ant-design/icons";

const StationInfoModal = ({ curStation }) => {
  // infoWindow 열고 닫는 context
  const [isInfoWindowVisible, setIsInfoWindowVisible] = useContext(
    isInfoWindowVisibleContext
  );

  const switchBusType = (busType) => {
    switch (busType) {
      case "0":
        return "일반";
      case "1":
        return "저상";
      case "2":
        return "굴절";
      default:
        return "";
    }
  };

  const switchReride_Num = (reride_Num) => {
    switch (reride_Num) {
      case "3":
        return "여유";
      case "4":
        return "보통";
      case "5":
        return "혼잡";
      default:
        return "없음";
    }
  };

  // 첫번째 버스 도착 예정 시간이 "출발대기"나 "운행종료"가 아닌지 확인
  const isFirstBusComing =
    curStation[0].arrmsg1 !== "출발대기" &&
    curStation[0].arrmsg1 !== "운행종료";

  // 첫번째 버스 도착 예정 시간이 "출발대기"나 "운행종료"가 아닌지 확인
  const isSecondBusComing =
    curStation[0].arrmsg2 !== "출발대기" &&
    curStation[0].arrmsg2 !== "운행종료";

  if (!isInfoWindowVisible) {
    return null;
  }

  return (
    <Container>
      <Text>
        막차 :
        {` ${curStation[0].lastTm.slice(8, 10)}시 ${curStation[0].lastTm.slice(
          10,
          12
        )}분`}
      </Text>
      <CloseBtn
        onClick={() => {
          setIsInfoWindowVisible(false);
        }}
      >
        X
      </CloseBtn>
      <Header>{curStation[0].stNm}</Header>
      <Text>
        도착예정
        <CaretDownOutlined />
      </Text>
      <Text>
        1.{" "}
        <span
          style={isFirstBusComing ? { color: "#0c8ce9" } : { color: "#545252" }}
        >
          {curStation[0].arrmsg1}
        </span>
      </Text>
      <Text style={{ color: "#545252" }}>
        {isFirstBusComing
          ? `(${switchBusType(curStation[0].busType1)}, ${switchReride_Num(
              curStation[0].reride_Num1
            )})`
          : ""}
      </Text>
      <Text>
        2.{" "}
        <span
          style={
            isSecondBusComing ? { color: "#0c8ce9" } : { color: "#545252" }
          }
        >
          {curStation[0].arrmsg2}
        </span>
      </Text>
      <Text style={{ color: "#545252" }}>
        {isSecondBusComing
          ? `(${switchBusType(curStation[0].busType2)}, ${switchReride_Num(
              curStation[0].reride_Num2
            )})`
          : ""}
      </Text>
    </Container>
  );
};

export default StationInfoModal;
