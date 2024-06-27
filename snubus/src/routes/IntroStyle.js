import styled from "@emotion/styled";
import {
  flex,
  Font_BlackHanSans,
  Font_DoHyeon,
} from "../util/publicStyleComponents";

export const Container = styled.main({
  width: "100dvw",
  height: "400dvh",
});

export const Intro1 = styled.article({
  width: "100%",
  height: "25%",
  background: `url(${process.env.PUBLIC_URL + `assets/introImg0.jpg`})`,
  backgroundSize: `100dvw 100dvh`,
});

export const Intro2 = styled.article({
  width: "100%",
  height: "25%",
  background: `url(${process.env.PUBLIC_URL + `assets/introImg1.jpg`})`,
  backgroundSize: `100dvw 100dvh`,
});

export const Intro3 = styled.article({
  width: "100%",
  height: "25%",
  background: `url(${process.env.PUBLIC_URL + `assets/introImg2.jpg`})`,
  backgroundSize: `100dvw 100dvh`,
});

export const Intro4 = styled.article({
  width: "100%",
  height: "25%",
  background: `url(${process.env.PUBLIC_URL + `assets/introImg3.jpg`})`,
  backgroundSize: `100dvw 100dvh`,
});
