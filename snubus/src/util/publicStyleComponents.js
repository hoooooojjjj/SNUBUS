// 공통 스타일 컴포넌트

// container 스타일 컴포넌트

export const container = () => {
  return {
    width: "100dvw",
    height: "100dvh",
  };
};

// flex 스타일 컴포넌트
export const flex = (flex_direction, justify_content, align_items) => {
  return {
    display: "flex",
    flexDirection: flex_direction,
    justifyContent: justify_content,
    alignItems: align_items,
  };
};

// 영어
// Archivo Black 폰트
export const Font_Kanit = () => {
  return {
    fontFamily: '"Kanit", sans-serif',
    fontStyle: "normal",
    color: "white",
  };
};

export const Font_DoHyeon = () => {
  return {
    fontFamily: "'Do Hyeon', sans-serif",
    fontStyle: "normal",
    color: "white",
    fontWeight: 500,
  };
};

export const Font_NanumSquare = () => {
  return {
    fontFamily: "'NanumSquare', sans-serif",
    fontStyle: "normal",
    color: "white",
    fontWeight: 600,
  };
};
