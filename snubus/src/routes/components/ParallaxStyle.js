import styled from "@emotion/styled";

export const SlopeBeginContainer = styled.div((props) => ({
  background: `url(${
    process.env.PUBLIC_URL + `assets/introImg${props.offset}.jpg`
  })`,
  backgroundSize: "cover",
  width: "100dvw",
  height: "100dvh",
}));
