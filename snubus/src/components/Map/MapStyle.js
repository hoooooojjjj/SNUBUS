import styled from "@emotion/styled";

// Map 컴포넌트 컨테이너
export const Container = styled.div({
  width: "70dvw",
  height: "100dvh",
  position: "relative",
});

// 지도
export const Maps = styled.div({
  width: "100%",
  height: "100%",
});

// 버스 관련 정보
export const BusInfo = styled.div({
  position: "absolute",
  top: 10,
  left: 10,
  zIndex: 2,
});

// 업데이트 버튼
export const UpdateBtn = styled.button({
  position: "absolute",
  top: 10,
  right: 10,
  zIndex: 2,
});
