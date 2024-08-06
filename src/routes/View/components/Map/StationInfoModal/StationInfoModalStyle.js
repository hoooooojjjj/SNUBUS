import styled from "@emotion/styled";
import { Font_NanumSquare } from "../../../../../util/publicStyleComponents";
export const Container = styled.div({
  zIndex: 2,
  position: "absolute",
  top: "30%",
  left: 180,
  width: 250,
  height: "auto",
  border: "1px solid black",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
  borderRadius: 10,
  backgroundColor: "white",
  padding: 15,
  "@media(max-width: 1024px)": {
    top: "33%",
    left: 80,
    width: 200,
    borderRadius: 10,
    padding: 15,
  },
  "@media(max-width: 768px)": {
    top: "35%",
    left: 70,
    width: 150,
    borderRadius: 10,
    padding: 10,
  },
  "@media(max-width: 550px)": {
    margin: "0 auto",
    width: "100dvw",
    height: "30dvh",
  },
});

export const CloseBtn = styled.button({
  position: "absolute",
  top: 2,
  right: 0,
  fontSize: 20,
  background: "none",
  border: "none",
  cursor: "pointer",
  "@media(max-width: 1024px)": {
    fontSize: 18,
    top: 3,
    right: 3,
  },
  "@media(max-width: 768px)": {
    fontSize: 16,
    top: 1,
    right: 1,
  },
});

export const Header = styled.h1({
  fontSize: 25,
  padding: 0,
  margin: "15px 0px",
  "@media(max-width: 1024px)": {
    fontSize: 23,
  },
  "@media(max-width: 768px)": {
    fontSize: 18,
  },
});

export const Text = styled.p({
  padding: 0,
  margin: "0px 0px",
  ...Font_NanumSquare(),
  color: "black",
  "@media(max-width: 1024px)": {
    fontSize: 15,
  },
  "@media(max-width: 768px)": {
    fontSize: 13,
  },
});
