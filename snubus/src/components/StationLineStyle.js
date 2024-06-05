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

export const TimelineStyle = styled(Timeline)`
  margin-top: 20px;
  padding-top: 20px;
  color: white;
  overflow-y: scroll;
  & > li:last-child {
    padding-bottom: 0px;
  }
`;
