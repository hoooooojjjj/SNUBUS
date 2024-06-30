import React, { useState } from "react";
import {
  BtnWrap,
  StationSwitchBtn,
  LineWrap,
  PolylineBtn,
} from "../StationLineStyle";
import TimeLines from "./TimeLine/TimeLines";
import busInfo from "../../../../util/busInfo";
import { CheckOutlined, FundOutlined, StockOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
function StationTab({
  isPolylinVisible,
  setIsPolylinVisible,
  setIsInfoWindowVisible,
}) {
  // 현재 파라미터 받아와서 버스 번호 확인
  const { id } = useParams();

  /* state 코드 */

  // 중앙대학교 방면을 선택했는지 확인하는 state(방면 전환)
  const [isStart, setIsStart] = useState(true);

  /* 함수 코드 */

  // 현재 페이지의 버스 정보만 필터링
  const curBusInfo = busInfo.map((bus) => {
    return bus.buslist.filter((bus) => bus.num === id);
  })[id === "관악02" ? 1 : 0][0];

  // 중앙대학교 방면 버튼을 클릭하면 중앙대학교 방면 정류장 라인으로 전환
  const switchToDirectionToStart = () => {
    setIsStart(true);
    setIsPolylinVisible({ ...isPolylinVisible, visible: false });
    setIsInfoWindowVisible(false);
  };

  // 신림2동차고지 방면 버튼을 클릭하면 신림2동차고지 방면 정류장 라인으로 전환
  const switchToDirectionToEnd = () => {
    setIsStart(false);
    setIsPolylinVisible({ ...isPolylinVisible, visible: false });
    setIsInfoWindowVisible(false);
  };

  // 폴리라인 버튼 클릭 시 폴리라인 끄고 키기
  const onPloylineBtnClick = () => {
    setIsPolylinVisible({
      isStart: isStart,
      visible: !isPolylinVisible.visible,
    });
  };

  return (
    <>
      <BtnWrap>
        <StationSwitchBtn onClick={switchToDirectionToStart}>
          {isStart ? <CheckOutlined style={{ marginRight: 10 }} /> : <></>}
          {curBusInfo.btnName.start} 방면
        </StationSwitchBtn>
        <StationSwitchBtn onClick={switchToDirectionToEnd}>
          {isStart ? <></> : <CheckOutlined style={{ marginRight: 10 }} />}
          {curBusInfo.btnName.end} 방면
        </StationSwitchBtn>
      </BtnWrap>
      <LineWrap>
        <PolylineBtn onClick={onPloylineBtnClick}>
          {isPolylinVisible.visible ? (
            <>
              <FundOutlined /> 해당 방면 노선 라인 끄기
            </>
          ) : (
            <>
              <StockOutlined /> 해당 방면 노선 라인 켜기
            </>
          )}
        </PolylineBtn>
        <TimeLines isStart={isStart} />
      </LineWrap>
    </>
  );
}

export default StationTab;
