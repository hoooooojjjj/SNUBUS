import styled from "@emotion/styled";
import {
  flex,
  Font_DoHyeon,
  Font_NanumSquare,
} from "../../../util/publicStyleComponents";

// StationLine 컴포넌트 컨테이너
export const Container = styled.div({
  margin: "0 auto",
  width: "100dvw",
  height: "30dvh",
  ...flex("row", "center", "center"),
});

// StationLine 전체 Box Wrap
export const StationLineWrap = styled.div({
  width: "90%",
  ...flex("column", "center", "center"),
  border: "3px solid white",
  borderRadius: 15,
  padding: "15px 25px",
  height: "90%",
  position: "relative",
});

// 닫기 버튼
export const CloseBtn = styled.button({
  position: "absolute",
  top: 5,
  right: 5,
  fontSize: 18,
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "white",
  ...Font_DoHyeon(),
});

// 노선 정보 wrap
export const StationLineInfoWrap = styled.div({
  ...flex("row", "normal", "normal"),
  position: "relative",
});

// 노선 정보 text wrap
export const InfoTextWrap = styled.div(() => ({
  ...flex("column", "normal", "normal"),
  "@media(max-width: 550px)": {
    ...flex("column", "center", "center"),
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
    marginBottom: 5,
    fontSize: 20,
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
    margin: 0,
    marginRight: 5,
    fontSize: 16,
  },
  color: "white",
  ...Font_NanumSquare(),
});
