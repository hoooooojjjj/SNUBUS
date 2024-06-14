import styled from "@emotion/styled";
import { Timeline } from "antd";
import { flex, Font_BlackHanSans } from "../../../util/publicStyleComponents";

// StationLine 컴포넌트 컨테이너
export const Container = styled.div({
  margin: "0 auto",
  width: "30dvw",
  height: "100dvh",
  ...flex("row", "center", "center"),
  ...Font_BlackHanSans(),
});

// StationLine 전체 Box Wrap
export const StationLineWrap = styled.div({
  width: "90%",
  ...flex("column", "normal", "normal"),
  border: "1px solid white",
  padding: "15px 25px",
  height: "90%",
});

// 노선 정보 wrap
export const StationLineInfoWrap = styled.div({
  ...flex("row", "normal", "normal"),
  position: "relative",
});

// 노선 정보 text wrap
export const InfoTextWrap = styled.div((props) => ({
  ...flex("column", "normal", "normal"),
  borderTop: props.isMore ? "1px solid white" : "none",
  paddingTop: props.isMore ? 10 : 0,
}));

// 노선 정보 text
export const InfoText = styled.p({
  fontSize: 18,
  color: "white",
});

// 노선 정보 더보기 버튼
export const MoreBtn = styled.button({
  fontSize: 10,
  height: 20,
  position: "absolute",
  bottom: 20,
  right: 0,
});

// 방면 전환 버튼 wrap
export const BtnWrap = styled.div({
  ...flex("row", "center", "center"),
});

// 방면 전환 버튼
export const StationSwitchBtn = styled.button({});

// StationLine wrap
export const LineWrap = styled.div({
  width: "90%",
  overflowY: "scroll",
  marginTop: 20,
  paddingTop: 20,
});

// 버스 이미지
export const BusImg = styled.img((props) => ({
  position: "absolute",
  top: props.remainingDist,
  left: 2,
  width: 25,
}));

// 각 정류장 별 라인 wrap
export const TimeLinesWrap = styled.div({
  position: "relative",
});

// 각 정류장 별 라인
export const TimelineStyle = styled(Timeline)`
  height: 78px;
  padding-left: 10px;
  color: white;
  & > li > .ant-timeline-item-content {
    cursor: pointer;
    font-size: 18px;
    font-family: "Black Han Sans", sans-serif;
  }
  & > li:last-child {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;
