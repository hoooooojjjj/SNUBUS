import styled from "@emotion/styled";
import {
  flex,
  Font_BlackHanSans,
  Font_DoHyeon,
} from "../util/publicStyleComponents";

export const ContextContainer = styled.div({
  ...Font_DoHyeon(),
});

export const ContextH1 = styled.h1({
  ...Font_BlackHanSans(),
  textAlign: "center",
  marginBottom: 30,
});

export const ContextH5 = styled.h5({
  textAlign: "center",
  marginBottom: 30,
});

export const Form = styled.form({
  ...flex("column", "center", "center"),
  width: "50%",
  border: "3px solid white",
  borderRadius: 30,
  padding: 30,
  margin: "0 auto",
});

export const InputWrap = styled.div((props) => ({
  ...flex("row", "center", "center"),
  width: props.width,
}));

export const Label = styled.label({
  width: "100%",
  fontSize: 20,
  ...flex("row", "space-around", ""),
});

export const Input = styled.input({
  fontSize: 18,
  width: "70%",
});

export const Textarea = styled.textarea({
  fontSize: 18,
  width: "80%",
  height: 300,
});

export const ImgInput = styled.input({
  fontSize: 18,
  width: "70%",
});

export const SubmitBtn = styled.button({
  fontSize: 20,
  width: 200,
  padding: 5,
  marginTop: 10,
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
