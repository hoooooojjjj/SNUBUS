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
export const Font_ArchivoBlack = () => {
  return {
    fontFamily: "'Archivo Black', sans-serif",
    fontStyle: "normal",
    color: "white",
  };
};

// 한국어
export const Font_BlackHanSans = () => {
  return {
    fontFamily: "'Black Han Sans', sans-serif",
    fontStyle: "normal",
    color: "white",
  };
};

export const Font_DoHyeon = () => {
  return {
    fontFamily: "'Do Hyeon', sans-serif",
    fontStyle: "normal",
    color: "white",
  };
};
