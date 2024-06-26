import React, { useContext, useState } from "react";
import {
  BtnWrap,
  Container,
  StationLineWrap,
  StationSwitchBtn,
  LineWrap,
  StationLineInfoWrap,
  InfoTextWrap,
  InfoText,
  InfoTextHeader,
} from "./StationLineStyle";
import TimeLines from "./TimeLine/TimeLines";
import { CheckOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import busInfo from "../../../util/busInfo";
import { useParams } from "react-router-dom";
import { ViewContext } from "../../../routes/View";
import MobileStationInfoModal from "../StationInfoModal/MobileStationInfoModal";

const StationLine = ({ bus_stationData }) => {
  // 현재 파라미터 받아와서 버스 번호 확인
  const { id } = useParams();

  /* state 코드 */

  // 중앙대학교 방면을 선택했는지 확인하는 state(방면 전환)
  const [isStart, setIsStart] = useState(true);

  /* Context API 코드 */

  // view 페이지에서 받아온 context
  const {
    // infoWindow 열고 닫는 context
    isInfoWindowVisible,
    // 클릭한 버스 정류장 정류 받아오는 context
    clickedStationInfo,
  } = useContext(ViewContext);

  /* redux 코드 */

  // 버스 개수 state
  const busLength = bus_stationData.busDataReducer.busInfo.length;

  // 중앙대학교 방면 버튼을 클릭하면 중앙대학교 방면 정류장 라인으로 전환
  const switchDirectionToStart = () => {
    setIsStart(true);
  };

  // 신림2동차고지 방면 버튼을 클릭하면 신림2동차고지 방면 정류장 라인으로 전환
  const switchDirectionToEnd = () => {
    setIsStart(false);
  };

  // 현재 페이지의 버스 정보만 필터링

  const curBusInfo = busInfo.map((bus) => {
    return bus.buslist.filter((bus) => bus.num === id);
  })[id === "관악02" ? 1 : 0][0];

  if (window.matchMedia("(max-width: 425px)").matches && isInfoWindowVisible) {
    return <MobileStationInfoModal curStation={clickedStationInfo} />;
  }

  return (
    <Container>
      <StationLineWrap>
        <StationLineInfoWrap>
          {/* 데스크탑,랩탑 <-> 모바일에 따라 jsx 구조 변경 */}
          {!window.matchMedia("(max-width: 425px)").matches ? (
            <InfoTextWrap>
              <InfoTextHeader>{curBusInfo.route}</InfoTextHeader>
              <InfoText>
                첫차 {curBusInfo.firstTm} | 막차 {curBusInfo.lastTm}
              </InfoText>
              <InfoText>
                <strong>배차간격</strong> : {curBusInfo.interval}
              </InfoText>
              <InfoText>
                <strong>
                  {busLength > 0 ? `현재 ${busLength}대 운행중` : "운행종료"}
                </strong>
              </InfoText>
            </InfoTextWrap>
          ) : (
            <InfoTextWrap>
              <InfoTextHeader>{curBusInfo.route}</InfoTextHeader>
              <InfoText>
                {curBusInfo.firstTm} ~ {curBusInfo.lastTm} |{" "}
                <strong>
                  {busLength > 0 ? `  현재 ${busLength}대 운행중` : "운행종료"}
                </strong>
              </InfoText>
              <InfoText>
                <strong>배차간격</strong> : {curBusInfo.interval}
              </InfoText>
            </InfoTextWrap>
          )}
        </StationLineInfoWrap>
        <BtnWrap>
          <StationSwitchBtn onClick={switchDirectionToStart}>
            {isStart ? <CheckOutlined style={{ marginRight: 10 }} /> : <></>}
            {curBusInfo.btnName.start} 방면
          </StationSwitchBtn>
          <StationSwitchBtn onClick={switchDirectionToEnd}>
            {isStart ? <></> : <CheckOutlined style={{ marginRight: 10 }} />}
            {curBusInfo.btnName.end} 방면
          </StationSwitchBtn>
        </BtnWrap>
        <LineWrap>
          <TimeLines isStart={isStart} />
        </LineWrap>
      </StationLineWrap>
    </Container>
  );
};

// 상태를 props로 매핑
function mapStateToProps(state) {
  return { bus_stationData: state };
}
export default connect(mapStateToProps)(StationLine);
