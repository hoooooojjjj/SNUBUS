import styled from "@emotion/styled";
import { Timeline } from "antd";
import {
  flex,
  Font_DoHyeon,
  Font_NanumSquare,
  Font_Kanit,
} from "../../../util/publicStyleComponents";

// StationLine 컴포넌트 컨테이너
export const Container = styled.div({
  margin: "0 auto",
  width: "25dvw",
  height: "80dvh",
  "@media(max-width: 550px)": {
    width: "100dvw",
    marginTop: 10,
  },
  ...flex("row", "center", "center"),
  ...Font_NanumSquare(),
});

// StationLine 전체 Box Wrap
export const StationLineWrap = styled.div({
  position: "relative",
  width: "100%",
  ...flex("column", "normal", "normal"),
  "@media(max-width: 550px)": {
    ...flex("column", "center", "center"),
  },
  height: "95%",
});

// 노선 정보 wrap
export const StationLineInfoWrap = styled.div({
  ...flex("row", "normal", "normal"),
  position: "relative",
  height: "100%",
  "@media(max-width: 550px)": {
    height: "30%",
  },
});

// 로고 폰트
export const LogoText = styled.p({
  ...Font_Kanit(),
  fontWeight: 500,
  fontSize: 40,
  margin: 0,
  "@media(max-width: 1024px)": {
    fontSize: 35,
  },
  "@media(max-width: 768px)": {
    fontSize: 30,
  },
  "@media(max-width: 595px)": {
    fontSize: 35,
  },
  "@media(max-width: 320px)": {
    fontSize: 30,
  },
});

// 정류장 라인 탭 wrap
export const StationLineTabWrap = styled.div({
  width: "90%",
  height: 60,
  "@media(max-width: 550px)": {
    height: 50,
  },
  marginBottom: 10,
  ...flex("row", "center", "center"),
  fontSize: 16,
});

// 정보 탭 Btn
export const InfoTabBtn = styled.button((props) => ({
  width: "50%",
  height: "100%",
  background: "none",
  color: "white",
  border: "none",
  paddingBottom: 10,
  "@media(max-width: 550px)": {
    fontSize: 14,
  },
  borderBottom: props.isInfoTab ? "2px solid white" : "none",
}));

// 정류장 탭 Btn
export const StationTabBtn = styled.button((props) => ({
  width: "50%",
  height: "100%",
  background: "none",
  color: "white",
  border: "none",
  "@media(max-width: 550px)": {
    fontSize: 14,
  },
  paddingBottom: 10,
  borderBottom: props.isInfoTab ? "none" : "2px solid white",
}));

// 노선 정보 text wrap
export const InfoTextWrap = styled.div(() => ({
  ...flex("column", "normal", "normal"),
  "@media(max-width: 550px)": {
    ...flex("column", "normal", "normal"),
  },
}));

// 노선 정보 text header
export const InfoTextHeader = styled.p({
  fontSize: 20,
  "@media(max-width: 1024px)": {
    fontSize: 18,
  },
  "@media(max-width: 768px)": {
    fontSize: 16,
  },
  "@media(max-width: 550px)": {
    fontSize: 20,
    marginTop: 5,
  },
  "@media(max-width: 320px)": {
    fontSize: 18,
  },
  color: "white",
  ...Font_DoHyeon(),
});

// 노선 정보 text
export const InfoText = styled.p({
  fontSize: 16,
  "@media(max-width: 1024px)": {
    fontSize: 15,
  },
  "@media(max-width: 768px)": {
    fontSize: 14,
  },
  "@media(max-width: 550px)": {
    fontSize: 15,
    marginBottom: 10,
  },
  "@media(max-width: 320px)": {
    fontSize: 14,
  },
  color: "white",
});

// 방면 전환 버튼 wrap
export const BtnWrap = styled.div({
  ...flex("row", "space-around", "center"),
  "@media(max-width: 768px)": {
    ...flex("column", "center", "center"),
  },
  "@media(max-width: 550px)": {
    ...flex("row", "space-around", "center"),
  },
  ...Font_DoHyeon(),
});

// 방면 전환 버튼
export const StationSwitchBtn = styled.button({
  fontSize: 18,
  "@media(max-width: 1024px)": {
    fontSize: 16,
  },
  "@media(max-width: 768px)": {
    fontSize: 14,
    marginTop: 5,
  },
  "@media(max-width: 550px)": {
    fontSize: 15,
  },
  "@media(max-width: 320px)": {
    fontSize: 15,
  },
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
  width: "95%",
  borderTop: "2px solid #363636",
  overflowY: "scroll",
  marginTop: 10,
  paddingTop: 15,
  msOverflowStyle: "none" /* Internet Explorer */,
  scrollbarWidth: "none" /* Firefox */,
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const PolylineBtn = styled.button({
  width: "100%",
  marginBottom: 15,
  fontSize: 16,
  "@media(max-width: 1024px)": {
    fontSize: 16,
  },
  "@media(max-width: 768px)": {
    fontSize: 12,
    marginTop: 5,
  },
  "@media(max-width: 550px)": {
    fontSize: 15,
  },
  background: "none",
  color: "white",
  "&:hover": {
    color: "#0c8ce9",
  },
  border: "none",
  borderRadius: 10,
  ...Font_NanumSquare(),
});

// 버스 이미지
export const BusImg = styled.img((props) => ({
  position: "absolute",
  top: props.remainingDist,
  left: 2,
  width: 25,
  "@media(max-width: 1024px)": {
    left: 3,
    width: 23,
  },
  "@media(max-width: 768px)": {
    left: 4,
    width: 21,
  },
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
  @media (max-width: 1024px) {
    height: 68px;
  }
  @media (max-width: 768px) {
    height: 58px;
  }
  & > li > .ant-timeline-item-content {
    height: 28px;
    cursor: pointer;
    font-size: 18px;
    font-family: "Do Hyeon", sans-serif;
    font-weight: 400;
    @media (max-width: 1024px) {
      font-size: 16px;
      height: 18px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
      height: 8px;
    }
    &:hover {
      color: #0c8ce9;
    }
  }
  & > li:last-child {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;

export const MarkerInfoWrap = styled.div({
  ...flex("column", "normal", "normal"),
  borderTop: "2px solid #363636",
  width: "85%",
  paddingTop: 10,
});

export const MarkerWrap = styled.div({
  ...flex("row", "normal", "normal"),
});

export const MarkerInfoImg = styled.img({
  width: 30,
  height: 30,
  fontSize: 16,
  "@media(max-width: 1024px)": {
    width: 28,
    height: 28,
  },
  "@media(max-width: 768px)": {
    width: 26,
    height: 26,
  },
  "@media(max-width: 550px)": {
    width: 30,
    height: 30,
  },
  "@media(max-width: 320px)": {
    width: 28,
    height: 28,
  },
  marginRight: 10,
  backgroundColor: "white",
  borderRadius: 50,
  padding: 3,
});

export const MarkerInfoText = styled.p({
  fontSize: 16,
  paddingTop: 2,
  "@media(max-width: 1024px)": {
    fontSize: 15,
  },
  "@media(max-width: 768px)": {
    fontSize: 14,
  },
  "@media(max-width: 550px)": {
    fontSize: 15,
    paddingTop: 4,
  },
  "@media(max-width: 320px)": {
    fontSize: 14,
  },
});

export const FooterP = styled.p({
  position: "absolute",
  bottom: 3,
  right: 5,
  margin: 5,
  color: "white",
  fontSize: 13,
  "@media(max-width: 550px)": {
    position: "relative",
  },
  "@media(max-width: 320px)": {},
});

// 다른 버스로 이동할 수 있는 dropdown

export const BusSwitchBtn = styled.div({
  position: "absolute",
  top: 18,
  right: 20,
  cursor: "pointer",
  width: "35%",
  textAlign: "center",
});

export const BusSelectWrap = styled.div({
  ...flex("column", "center", "flex-start"),
  backgroundColor: "#1a1919",
  padding: 5,
  position: "absolute",
  top: 15,
  right: 20,
  width: "35%",
  borderRadius: 10,
  ...Font_NanumSquare(),
  border: "1px solid white",
  // "@media(max-width: 550px)": {
  //   width: "100%",
  //   height: 40,
  // },
});

export const BusSelectBtn = styled.button({
  width: "100%",
  height: "100%",
  background: "none",
  border: "none",
  color: "white",
  ...Font_NanumSquare(),
  "&:hover": {
    color: "#0c8ce9",
  },
});

export const BusSelectCloseBtn = styled.div({
  position: "absolute",
  top: 5,
  right: 8,
  cursor: "pointer",
  ...Font_NanumSquare(),
});
