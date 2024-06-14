import styled from "@emotion/styled";
import { Timeline } from "antd";
import { flex } from "../util/publicStyleComponents";

export const Container = styled.div({
  margin: "0 auto",
  width: "30dvw",
  height: "100dvh",
  ...flex("row", "center", "center"),
});
export const StationLineWrap = styled.div({
  ...flex("column", "center", "center"),
  border: "1px solid white",
  padding: "15px 25px",
  height: "80%",
});
export const BtnWrap = styled.div({
  ...flex("row", "center", "center"),
});
export const StationSwitchBtn = styled.button({});

export const LineWrap = styled.div({
  overflowY: "scroll",
  marginTop: 20,
  paddingTop: 20,
});
export const BusImg = styled.img((props) => ({
  position: "absolute",
  top: props.remainingDist,
  left: 2,
  width: 25,
}));
export const TimelineStyle = styled(Timeline)`
  height: 72px;
  padding-left: 10px;
  padding-top: 5px;
  color: white;
  & > li > .ant-timeline-item-content {
    cursor: pointer;
  }
  & > li:last-child {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;
export const TimeLinesWrap = styled.div({
  position: "relative",
});
