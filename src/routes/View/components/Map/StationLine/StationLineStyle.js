import styled from "@emotion/styled";
import { Timeline } from "antd";
import {
  flex,
  Font_DoHyeon,
  Font_NanumSquare,
  Font_Kanit,
} from "../../../../../util/publicStyleComponents";

// StationLine 컴포넌트 컨테이너
export const Container = styled.div({
  margin: "0 auto",
  width: "30dvw",
  height: "80dvh",
  marginRight: 15,
  "@media(max-width: 550px)": {
    width: "100dvw",
    marginTop: 10,
    height: "100dvh",
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
  height: "90%",
});

// 로고 폰트
export const LogoText = styled.p({
  ...Font_Kanit(),
  fontWeight: 500,
  fontSize: 40,
  height: "15%",
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
export const StationLineTabWrap = styled.div((props) => ({
  width: "100%",
  height: "10%",
  "@media(max-width: 550px)": {
    height: 50,
  },
  marginBottom: 10,
  ...flex("row", "center", "center"),
  fontSize: 16,
}));

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

// 노선 정보 wrap
export const StationLineInfoWrap = styled.div({
  ...flex("column", "normal", "normal"),
  position: "relative",
  width: "90%",
  marginTop: 10,
  // minHeight: "40%",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "15px",
  padding: "20px",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
  "@media(max-width: 768px)": {
    width: "95%",
    padding: "15px",
  },
  "@media(max-width: 550px)": {
    minHeight: "27%",
    padding: "12px",
    // margin: "10px",
  },
});

// 노선 정보 text wrap
export const InfoTextWrap = styled.div(() => ({
  ...flex("column", "normal", "normal"),
}));

// 노선 정보 text header
export const InfoTextHeader = styled.p({
  margin: "0 0 15px 0",
  fontSize: "28px",
  fontWeight: "bold",
  background: "linear-gradient(45deg, #fff, #0c8ce9)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "@media(max-width: 1024px)": {
    fontSize: "24px",
  },
  "@media(max-width: 768px)": {
    fontSize: "22px",
  },
  "@media(max-width: 550px)": {
    fontSize: "20px",
    marginBottom: "10px",
  },
  "@media(max-width: 320px)": {
    fontSize: "18px",
  },
  ...Font_DoHyeon(),
});

// 노선 정보 text
export const InfoText = styled.p({
  fontSize: "16px",
  padding: "8px 12px",
  margin: "8px 0",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  background: "rgba(255,255,255,0.03)",
  "&:hover": {
    background: "rgba(255,255,255,0.08)",
  },
  "@media(max-width: 1024px)": {
    fontSize: "15px",
    padding: "6px 10px",
  },
  "@media(max-width: 768px)": {
    fontSize: "14px",
  },
  "@media(max-width: 550px)": {
    fontSize: "13px",
    margin: "5px 0",
  },
  color: "white",
});

// 방면 전환 버튼 wrap
export const BtnWrap = styled.div({
  height: "15%",
  ...flex("row", "space-around", "center"),
  "@media(max-width: 768px)": {
    ...flex("column", "center", "center"),
  },
  "@media(max-width: 550px)": {
    ...flex("row", "space-around", "center"),
    height: "13%",
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
  height: "100%",
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
  height: "5%",
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
    height: "10%",
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
    font-weight: 400;
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
  background: "rgba(12,140,233,0.1)",
  backdropFilter: "blur(5px)",
  borderRadius: "15px",
  padding: "20px",
  width: "90%",
  margin: "15px 0",
  transition: "all 0.3s ease",
  "@media(max-width: 768px)": {
    width: "95%",
    padding: "15px",
  },
  "@media(max-width: 550px)": {
    padding: "12px",
    margin: "5px 0",
  },
});

export const MarkerWrap = styled.div({
  ...flex("row", "normal", "center"),
  padding: "10px",
  margin: "5px 0",
  borderRadius: "10px",
  transition: "all 0.2s ease",
  cursor: "default",
  "&:hover": {
    background: "rgba(255,255,255,0.1)",
    transform: "translateX(5px)",
  },
});

export const MarkerInfoImg = styled.img({
  width: "35px",
  height: "35px",
  padding: "5px",
  marginRight: "15px",
  backgroundColor: "rgba(255,255,255,0.9)",
  borderRadius: "50%",
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  "@media(max-width: 1024px)": {
    width: "30px",
    height: "30px",
  },
  "@media(max-width: 768px)": {
    width: "28px",
    height: "28px",
  },
  "@media(max-width: 550px)": {
    width: "25px",
    height: "25px",
    marginRight: "10px",
  },
});

export const MarkerInfoText = styled.p({
  fontSize: "16px",
  fontWeight: "500",
  transition: "all 0.2s ease",
  "@media(max-width: 1024px)": {
    fontSize: "15px",
  },
  "@media(max-width: 768px)": {
    fontSize: "14px",
  },
  "@media(max-width: 550px)": {
    fontSize: "13px",
  },
});

export const FooterP = styled.div({
  position: "absolute",
  bottom: 3,
  right: 5,
  margin: 0,
  color: "white",
  fontSize: 13,
  "@media(max-width: 550px)": {
    position: "relative",
  },
});

// 다른 버스로 이동할 수 있는 dropdown
export const BusSwitchBtn = styled.div({
  position: "absolute",
  top: 0,
  right: 20,
  cursor: "pointer",
  width: "auto",
  textAlign: "center",
  fontSize: 15,
  "@media(max-width: 768px)": {
    fontSize: 15,
  },
  "@media(max-width: 375px)": {
    fontSize: 13,
  },
  "@media(max-width: 320px)": {
    fontSize: 11,
  },
});

export const BusSelectWrap = styled.div({
  ...flex("column", "center", "flex-start"),
  backgroundColor: "#1a1919",
  padding: 5,
  position: "absolute",
  top: 0,
  right: 20,
  width: "35%",
  borderRadius: 10,
  ...Font_NanumSquare(),
  fontSize: 15,
  border: "1px solid white",
  "@media(max-width: 768px)": {
    width: "45%",
  },
  "@media(max-width: 550px)": {
    width: "25%",
  },
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
  "@media(max-width: 768px)": {
    fontSize: 15,
  },
  "@media(max-width: 375px)": {
    fontSize: 13,
  },
  "@media(max-width: 320px)": {
    fontSize: 13,
  },
});

export const BusSelectCloseBtn = styled.div({
  position: "absolute",
  top: 3,
  right: 3,
  cursor: "pointer",
  ...Font_NanumSquare(),
  "@media(max-width: 768px)": {
    fontSize: 15,
  },
  "@media(max-width: 375px)": {
    fontSize: 13,
  },
});

export const Lisense = styled.span({
  position: "absolute",
  top: -10,
  fontSize: 13,
  "@media(max-width: 550px)": {
    top: 5,
    left: 20,
    fontSize: 11,
  },

  textAlign: "left",
  width: "100%",
});
