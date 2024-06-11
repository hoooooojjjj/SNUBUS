import styled from "@emotion/styled";
import { Timeline } from "antd";
import { flex } from "../util/publicStyleComponents";

export const Container = styled.div({
  margin: "0 auto",
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
  position: "relative",
});
export const BusImg = styled.img({
  position: "absolute",
  top: 15,
  left: 2,
  width: 25,
});
export const TimelineStyle = styled(Timeline)`
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
