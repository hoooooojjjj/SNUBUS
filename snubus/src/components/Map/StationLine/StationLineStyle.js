import styled from "@emotion/styled";
import { Timeline } from "antd";
import {
  flex,
  Font_BlackHanSans,
  Font_DoHyeon,
} from "../../../util/publicStyleComponents";

// StationLine 컴포넌트 컨테이너
export const Container = styled.div({
  margin: "0 auto",
  width: "30dvw",
  height: "100dvh",
  ...flex("row", "center", "center"),
  ...Font_DoHyeon(),
});

// StationLine 전체 Box Wrap
export const StationLineWrap = styled.div({
  width: "90%",
  ...flex("column", "normal", "normal"),
  border: "3px solid white",
  borderRadius: 15,
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

// 노선 정보 text header
export const InfoTextHeader = styled.p({
  fontSize: 20,
  color: "white",
  ...Font_BlackHanSans(),
});

// 노선 정보 text
export const InfoText = styled.p({
  fontSize: 16,
  color: "white",
});

// 노선 정보 더보기 버튼
export const MoreBtn = styled.button({
  fontSize: 12,
  height: 20,
  position: "absolute",
  bottom: 17,
  right: 0,
  color: "white",
  background: "none",
  "&:hover": {
    color: "#999999",
  },
  border: "none",
  borderRadius: 5,
});

// 방면 전환 버튼 wrap
export const BtnWrap = styled.div({
  ...flex("row", "space-around", "center"),
  ...Font_BlackHanSans(),
});

// 방면 전환 버튼
export const StationSwitchBtn = styled.button({
  fontSize: 18,
  background: "none",
  color: "white",
  "&:hover": {
    color: "#0c8ce9",
  },
  border: "none",
  borderRadius: 10,
});

// StationLine wrap
export const LineWrap = styled.div({
  width: "100%",
  borderTop: "1px solid white",
  overflowY: "scroll",
  marginTop: 10,
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
    height: 28px;
    cursor: pointer;
    font-size: 18px;
    font-family: "Do Hyeon", sans-serif;
    &:hover {
      color: #0c8ce9;
    }
  }
  & > li:last-child {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;
