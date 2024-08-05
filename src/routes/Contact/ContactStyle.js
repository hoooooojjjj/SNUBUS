import styled from "@emotion/styled";
import {
  flex,
  Font_DoHyeon,
  Font_NanumSquare,
} from "../../util/publicStyleComponents";

export const ContextContainer = styled.div({
  ...Font_NanumSquare(),
});

export const ContextH1 = styled.h1({
  ...Font_DoHyeon(),
  textAlign: "center",
  marginBottom: 30,
  marginTop: 20,
  "@media(max-width: 1024px)": {
    margin: "0 auto",
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  "@media(max-width: 768px)": {
    margin: "0 auto",
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  "@media(max-width: 550px)": {
    margin: "0 auto",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  "@media(max-width: 320px)": {
    margin: "0 auto",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
  },
});

export const ContextH4 = styled.h4((props) => ({
  color: props.color || "white",
  textAlign: "center",
  marginBottom: 30,
  "@media(max-width: 1024px)": {
    margin: "0 auto",
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
  },
  "@media(max-width: 768px)": {
    margin: "0 auto",
    fontSize: 15,
    marginBottom: 20,
    marginTop: 20,
  },
  "@media(max-width: 550px)": {
    margin: "0 auto",
    fontSize: 13,
    width: "80%",
    marginBottom: 20,
    marginTop: 20,
  },
  "@media(max-width: 320px)": {
    margin: "0 auto",
    fontSize: 13,
    width: "70%",
    marginBottom: 20,
    marginTop: 20,
  },
}));

export const Form = styled.form({
  ...flex("column", "center", "center"),
  width: "50%",
  "@media(max-width: 1024px)": {
    width: "60%",
  },
  "@media(max-width: 768px)": {
    width: "80%",
  },
  "@media(max-width: 550px)": {
    width: "80%",
  },
  "@media(max-width: 375px)": {
    width: "75%",
  },
  border: "3px solid white",
  borderRadius: 30,
  padding: 30,
  margin: "0 auto",
});

export const InputWrap = styled.div((props) => ({
  ...flex("row", "center", "center"),
  "@media(max-width: 550px)": {
    ...flex("column", "center", "center"),
  },
  width: "100%",
}));

export const Label = styled.label({
  width: "100%",
  fontSize: 20,
  "@media(max-width: 1024px)": {
    fontSize: 15,
  },

  "@media(max-width: 550px)": {
    fontSize: 13,
  },
  ...flex("row", "space-around", ""),
});

export const Input = styled.input({
  fontSize: 18,
  "@media(max-width: 1024px)": {
    fontSize: 13,
  },
  "@media(max-width: 768px)": {
    fontSize: 13,
  },
  "@media(max-width: 550px)": {
    width: "80%",
  },
  "@media(max-width: 375px)": {},
  "@media(max-width: 320px)": {},
  width: "70%",
  backgroundColor: "#ededed",
  "&::placeholder": {
    color: "#999999",
    paddingLeft: 5,
  },
});

export const Textarea = styled.textarea({
  fontSize: 18,
  "@media(max-width: 1024px)": {
    fontSize: 13,
  },
  "@media(max-width: 768px)": {
    fontSize: 13,
  },
  "@media(max-width: 475px)": {
    height: 200,
  },
  "@media(max-width: 320px)": {
    height: 150,
    width: "75%",
  },
  width: "80%",
  height: 300,
  backgroundColor: "#ededed",
  "&::placeholder": {
    color: "#999999",
    paddingLeft: 5,
  },
});

export const ImgInput = styled.input({
  fontSize: 18,
  marginBottom: 20,
  "@media(max-width: 1024px)": {
    fontSize: 13,
    marginBottom: 0,
  },
  "@media(max-width: 768px)": {
    fontSize: 13,
  },
  "@media(max-width: 550px)": {
    width: "80%",
  },
  width: "70%",
});

export const SubmitBtn = styled.button({
  fontSize: 20,
  width: 200,
  "@media(max-width: 1024px)": {
    fontSize: 15,
    width: 180,
  },
  "@media(max-width: 768px)": {
    width: 150,
  },
  "@media(max-width: 550px)": {
    fontSize: 14,
    marginTop: 5,
  },
  "@media(max-width: 320px)": {
    fontSize: 13,
    marginTop: 5,
  },

  padding: 5,
  marginTop: 10,

  background: "none",
  color: "white",
  "&:hover": {
    color: "#0c8ce9",
  },
  border: "2px solid white",
  borderRadius: 10,
});

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const Modal = styled.div`
  border: 3px solid #525252;
  background-color: #e3e3e3;
  padding: 20px;
  max-width: 400px;
  text-align: center;
  border-radius: 20px;
`;

export const ModalContent = styled.p`
  color: black;
  font-size: 20px;
`;

export const ModalCloseBtn = styled.button({
  fontSize: 20,
  width: 100,
  "@media(max-width: 1024px)": {
    fontSize: 16,
  },
  "@media(max-width: 768px)": {
    fontSize: 14,
    marginTop: 5,
  },
  "@media(max-width: 320px)": {
    fontSize: 13,
    marginTop: 5,
  },
  background: "none",
  color: "black",
  "&:hover": {
    color: "#0c8ce9",
    backgroundColor: "#d4d4d4",
  },
  border: "2px solid black",
  borderRadius: 10,
});
