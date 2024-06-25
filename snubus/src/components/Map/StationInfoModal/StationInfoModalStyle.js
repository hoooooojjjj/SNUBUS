import styled from "@emotion/styled";
import { Font_DoHyeon } from "../../../util/publicStyleComponents";
export const Container = styled.div({
  zIndex: 2,
  position: "absolute",
  top: "30%",
  left: 50,
  width: 250,
  height: "auto",
  border: "1px solid black",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
  borderRadius: 10,
  backgroundColor: "white",
  padding: 15,
  "@media(max-width: 1024px)": {
    top: "30%",
    left: 30,
    width: 200,
    borderRadius: 10,
    padding: 15,
  },
  "@media(max-width: 768px)": {
    top: "30%",
    left: 10,
    width: 150,
    borderRadius: 10,
    padding: 10,
  },
});

export const CloseBtn = styled.button({
  position: "absolute",
  top: 5,
  right: 5,
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
  ...Font_DoHyeon(),
  color: "black",
  "@media(max-width: 1024px)": {
    fontSize: 15,
  },
  "@media(max-width: 1024px)": {
    fontSize: 13,
  },
});
