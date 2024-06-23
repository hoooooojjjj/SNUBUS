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
  MoreBtn,
  InfoTextHeader,
} from "./StationLineStyle";
import TimeLines from "./TimeLine/TimeLines";
import { CheckOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const StationLine = ({ bus_stationData }) => {
  // 버스 개수 state
  const busLength = bus_stationData.busDataReducer.busInfo.length;

  // 중앙대학교 방면을 선택했는지 확인하는 state(방면 전환)
  const [isStart, setIsStart] = useState(true);

  // 중앙대학교 방면 버튼을 클릭하면 중앙대학교 방면 정류장 라인으로 전환
  const switchDirectionToStart = () => {
    setIsStart(true);
  };

  // 신림2동차고지 방면 버튼을 클릭하면 신림2동차고지 방면 정류장 라인으로 전환
  const switchDirectionToEnd = () => {
    setIsStart(false);
  };

  // 더보기 버튼 클릭 여부 state
  const [isMoreBtnClicked, setIsMoreBtnClicked] = useState(false);

  // 더보기 버튼 클릭하면 더보기 버튼 클릭 여부 state 변경
  const onMoreBtnClick = () => {
    setIsMoreBtnClicked(!isMoreBtnClicked);
  };

  return (
    <Container>
      <StationLineWrap>
        <StationLineInfoWrap>
          <InfoTextWrap>
            <InfoTextHeader>신림2동차고지 ↔️ 중앙대학교</InfoTextHeader>
            <InfoText>첫차 05:30 | 막차 23:30</InfoText>
            <InfoText>
              배차간격 7분 |{" "}
              {busLength > 0 ? `현재 ${busLength}대 운행중` : "운행종료"}
            </InfoText>
          </InfoTextWrap>
          <MoreBtn onClick={onMoreBtnClick}>더보기⬇️</MoreBtn>
        </StationLineInfoWrap>
        {isMoreBtnClicked ? (
          <InfoTextWrap isMore={true}>
            <InfoText>배차간격 : 평일 7분, 토요일 11분, 휴일 13분</InfoText>
            <InfoText>저상버스 예약문의 : 070-4698-2302</InfoText>
          </InfoTextWrap>
        ) : (
          <></>
        )}

        <BtnWrap>
          <StationSwitchBtn onClick={switchDirectionToStart}>
            {isStart ? <CheckOutlined style={{ marginRight: 10 }} /> : <></>}
            중앙대학교 방면
          </StationSwitchBtn>
          <StationSwitchBtn onClick={switchDirectionToEnd}>
            {isStart ? <></> : <CheckOutlined style={{ marginRight: 10 }} />}
            신림2동차고지 방면
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
