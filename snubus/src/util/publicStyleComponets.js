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
