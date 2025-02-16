import styled from "@emotion/styled";
import {
  flex,
  Font_DoHyeon,
  Font_NanumSquare,
} from "../../util/publicStyleComponents";

export const ContextContainer = styled.div({
  ...Font_NanumSquare(),
  minHeight: "100vh",
  background: "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.6))",
  padding: "2rem 0",
});

export const ContextH1 = styled.h1({
  ...Font_DoHyeon(),
  textAlign: "center",
  color: "#fff",
  fontSize: "3.5rem",
  marginBottom: 30,
  marginTop: 20,
  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  "@media(max-width: 1024px)": {
    fontSize: "2.5rem",
    marginBottom: 20,
  },
  "@media(max-width: 768px)": {
    fontSize: "2rem",
  },
  "@media(max-width: 550px)": {
    fontSize: "1.8rem",
    marginBottom: 15,
  },
  "@media(max-width: 320px)": {
    fontSize: "1.5rem",
  },
});

export const ContextH4 = styled.h4((props) => ({
  color: props.color || "rgba(255, 255, 255, 0.8)",
  textAlign: "center",
  fontSize: "1.2rem",
  width: "100%",
  lineHeight: 1.6,
  marginBottom: 20,
  "@media(max-width: 768px)": {
    fontSize: "1rem",
  },
  "@media(max-width: 550px)": {
    fontSize: "0.9rem",
    width: "90%",
    margin: "0 auto",
  },
}));

export const Form = styled.form({
  ...flex("column", "center", "center"),
  width: "50%",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: 20,
  padding: "40px",
  margin: "2rem auto",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  "@media(max-width: 1024px)": {
    width: "70%",
    padding: "30px",
  },
  "@media(max-width: 768px)": {
    width: "85%",
    padding: "25px",
  },
  "@media(max-width: 550px)": {
    width: "90%",
    padding: "20px",
  },
});

export const InputWrap = styled.div((props) => ({
  ...flex("column", "flex-start", "stretch"),

  width: "100%",
  // marginBottom: "2rem",

  position: "relative",
  "&:last-child": {
    marginBottom: "1rem",
  },
}));

export const Label = styled.label({
  width: "90%",
  fontSize: "1.1rem",
  color: "rgba(255, 255, 255, 0.9)",
  marginBottom: "0.8rem",
  fontWeight: "500",
  display: "block",
  letterSpacing: "0.5px",
  "@media(max-width: 1024px)": {
    fontSize: "1rem",
    marginBottom: "0.6rem",
  },
  "@media(max-width: 550px)": {
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
  },
});

export const Input = styled.input({
  width: "100%",
  height: "50px",
  marginTop: 10,
  padding: "0 16px",
  fontSize: "1rem",
  backgroundColor: "rgba(255, 255, 255, 0.07)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "8px",
  color: "#fff",
  transition: "all 0.3s ease",
  "&::placeholder": {
    color: "rgba(255, 255, 255, 0.5)",
  },
  "&:focus": {
    outline: "none",
    border: "1px solid rgba(12, 140, 233, 0.5)",
    boxShadow: "0 0 0 2px rgba(12, 140, 233, 0.2)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  "@media(max-width: 768px)": {
    height: "45px",
    fontSize: "0.95rem",
  },
  "@media(max-width: 550px)": {
    height: "40px",
    fontSize: "0.9rem",
    padding: "0 14px",
  },
});

export const Textarea = styled.textarea({
  width: "100%",
  marginTop: 10,
  height: "200px",
  padding: "16px",
  fontSize: "1rem",
  backgroundColor: "rgba(255, 255, 255, 0.07)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "8px",
  color: "#fff",
  transition: "all 0.3s ease",
  resize: "vertical",
  minHeight: "150px",
  "&::placeholder": {
    color: "rgba(255, 255, 255, 0.5)",
  },
  "&:focus": {
    outline: "none",
    border: "1px solid rgba(12, 140, 233, 0.5)",
    boxShadow: "0 0 0 2px rgba(12, 140, 233, 0.2)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  "@media(max-width: 768px)": {
    fontSize: "0.95rem",
    padding: "14px",
  },
  "@media(max-width: 550px)": {
    fontSize: "0.9rem",
    padding: "12px",
    minHeight: "120px",
  },
});

export const ImgInput = styled.input({
  width: "100%",
  fontSize: "0.9rem",
  marginBottom: "1rem",
  marginTop: 10,
  color: "rgba(255, 255, 255, 0.9)",
  "&::-webkit-file-upload-button": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "6px",
    color: "#fff",
    padding: "8px 12px",
    marginRight: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
  },
  "@media(max-width: 550px)": {
    fontSize: "0.8rem",
    "&::-webkit-file-upload-button": {
      padding: "6px 10px",
    },
  },
});

export const SubmitBtn = styled.button({
  fontSize: 18,
  width: 200,
  padding: "12px 24px",
  marginTop: 20,
  background: "linear-gradient(135deg, #0c8ce9 0%, #0073e6 100%)",
  color: "white",
  border: "none",
  borderRadius: 12,
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(12, 140, 233, 0.4)",
  },
  "@media(max-width: 550px)": {
    width: 160,
    fontSize: 16,
  },
});

export const ModalContainer = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 20,
  padding: "0 20px",
});

export const Modal = styled.div({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  padding: "2rem",
  borderRadius: "16px",
  width: "100%",
  maxWidth: "400px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  "@media(max-width: 550px)": {
    padding: "1.5rem",
    maxWidth: "90%",
  },
});

export const ModalContent = styled.p({
  color: "#333",
  fontSize: "1.1rem",
  textAlign: "center",
  lineHeight: 1.5,
  marginBottom: "1.5rem",
  "@media(max-width: 550px)": {
    fontSize: "1rem",
  },
});

export const ModalCloseBtn = styled.button({
  width: "100%",
  fontSize: "1rem",
  padding: "10px 24px",
  backgroundColor: "#0c8ce9",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#0073e6",
    transform: "translateY(-2px)",
  },
  "@media(max-width: 550px)": {
    fontSize: "0.9rem",
    padding: "8px 20px",
  },
});
