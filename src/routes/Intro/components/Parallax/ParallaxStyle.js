import styled from "@emotion/styled";
import {
  flex,
  Font_Kanit,
  Font_NanumSquare,
} from "../../../../util/publicStyleComponents";
import { keyframes } from "@emotion/react";

export const SceneCommonStyle = styled.div({
  maxWidth: "70%",
  padding: "20px",
  margin: "0 auto",
  "@media(max-width: 768px)": {
    maxWidth: "90%",
    margin: "0",
    marginRight: "15px",
  },
  "@media(max-width: 550px)": {
    maxWidth: "85%",
    padding: "10px",
    margin: "0",
    marginRight: "15px",
  },

  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const ParallaxContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  // scroll-snap-points-y: repeat(100vh);
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const Scene = styled.section`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  overflow: hidden;
  background-color: rgba(17, 24, 39, 0.98);
  margin: 0 auto;
  position: relative;
`;

export const Header = styled.header`
  z-index: 2;
  color: white;
  max-width: 100%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 1.5rem;
  text-align: center;
`;

export const Scene1HeaderH1 = styled.h1`
  z-index: 2;
  font-family: "Kanit", sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
  width: 100%;
  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
  }
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const Scene1HeaderH2 = styled.h2`
  cursor: pointer;
  color: ${(props) => (props.isLast ? "rgba(74, 222, 128, 0.9)" : "white")};
  &:hover {
    transform: ${(props) => (props.isLast ? "scale(1.05)" : "scale(1)")};
    transition: all 0.3s ease-in-out;
  }
  z-index: 2;
  font-family: "Do hyeon", sans-serif;
  font-size: 2rem;
  margin-top: ${(props) => (props.isLast ? "5rem" : "3rem")};
  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin-top: 1.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
  @media (max-width: 550px) {
    font-size: 1.2rem;
    margin-top: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const Scene2Wrap = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  height: 90%;
`;

export const Scene2HeaderH1 = styled.h1`
  z-index: 2;
  font-family: "Kanit", sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    font-size: 2.5em;
  }
  @media (max-width: 768px) {
    font-size: 2em;
  }
  @media (max-width: 550px) {
    font-size: 2em;
  }
  @media (max-width: 320px) {
    font-size: 1.8em;
  }
  color: white;
`;

export const GridContainer = styled.div`
  z-index: 2;
  display: grid;
  width: 90%;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  @media (max-width: 1024px) {
    gap: 18px;
    padding: 10px;
  }
  @media (max-width: 768px) {
    gap: 15px;
    padding: 10px;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
  color: white;
  font-family: "Do hyeon", sans-serif;
`;

export const GridItem = styled.div`
  padding: 20px;
  width: 90%;
  @media (max-width: 1024px) {
    padding: 15px;
  }
  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 550px) {
    padding: 0px;
    padding-top: 10px;
    width: 100%;
  }

  text-align: center;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  p {
    font-size: 1.2em;
    @media (max-width: 1024px) {
      font-size: 1em;
    }
    @media (max-width: 768px) {
      font-size: 0.8em;
    }
    @media (max-width: 550px) {
      font-size: 0.8em;
    }
    @media (max-width: 320px) {
      font-size: 0.68em;
    }
    margin-bottom: 5px;
  }
`;

export const GridHeader = styled.div`
  font-size: 2.5em;
  background: linear-gradient(to right, #60a5fa, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1024px) {
    font-size: 1.9em;
  }
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
  @media (max-width: 550px) {
    font-size: 1.5em;
  }
  @media (max-width: 320px) {
    font-size: 1.4em;
  }
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ExplainWrap = styled.div((props) => ({
  ...flex("column", "center", props.alignItems),
  zIndex: 2,

  overflow: "hidden",
  height: "100dvh",
}));

export const ExplainHeader = styled.h1({
  color: "white",
  ...Font_Kanit(),
  width: "100%",
  textAlign: "center",
  zIndex: 2,
  fontSize: "3rem",
  marginTop: 0,
  marginBottom: "0.2rem",
  "@media(max-width: 1024px)": {
    fontSize: "2.5rem",
  },
  "@media(max-width: 768px)": {
    fontSize: "2rem",
  },
  "@media(max-width: 550px)": {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  "@media(max-width: 320px) ": {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
  },
});

export const ExplainFlex = styled.div({
  ...flex("row", "center", "center"),
  zIndex: 2,
});

export const ExplainImg = styled.img({
  width: "60%",
  marginLeft: 5,
  zIndex: 2,
  border: "2px solid white",
  borderRadius: 15,
  marginBottom: "0.2rem",
  "@media(max-width: 768px)": {
    width: "70%",
    marginBottom: "0.5rem",
  },
  "@media(max-width: 550px)": {
    width: "96%",
    margin: "0 auto",
    marginBottom: "0.5rem",
  },
});

export const ExplainText = styled.p({
  margin: 15,
  zIndex: 2,
  width: "95%",
  fontSize: "1.4rem",
  ...Font_NanumSquare(),
  color: "#f0f0f0",
  "@media(max-width: 1024px)": {
    fontSize: "1.3rem",
  },
  "@media(max-width: 768px)": {
    fontSize: "1rem",
  },
  "@media(max-width: 550px)": {
    fontSize: "0.8rem",
    margin: 7,
  },
  "@media(max-width: 320px) ": {
    fontSize: "0.8rem",
  },
});
export const ViewImgWrap = styled.div({
  ...flex("row", "space-evenly", "center"),
  "@media(max-width: 550px)": {
    ...flex("column", "flex-start", "flex-start"),
  },
});

export const Wrapper = styled.div`
  height: 65px;
  @media (max-width: 1024px) {
    height: 55px;
  }
  @media (max-width: 768px) {
    height: 45px;
  }
  @media (max-width: 550px) {
    height: 35px;
  }
  @media (max-width: 375px) {
    height: 25px;
  }
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Words = styled.div`
  overflow: hidden;
  border-bottom: 3px solid white;
  margin: 0px 10px;
`;

const spin_words = keyframes` 
  0% {
    transform: translateY(-112%);
  }
  8.33% {
    transform: translateY(-100%);
  }
  16.67% {
    transform: translateY(-212%);
  }
  25% {
    transform: translateY(-200%);
  }
  33.33% {
    transform: translateY(-312%);
  }
  41.67% {
    transform: translateY(-300%);
  }
  50% {
    transform: translateY(-412%);
  }
  58.33% {
    transform: translateY(-400%);
  }
  66.67% {
    transform: translateY(-512%);
  }
  75% {
    transform: translateY(-500%);
  }
  83.33% {
    transform: translateY(-612%);
  }
  91.67% {
    transform: translateY(-600%);
  }
  100% {
    transform: translateY(-712%);
  }
`;

export const Span = styled.span`
  display: block;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  animation: ${spin_words} 7s infinite;
  background: linear-gradient(to right, #60a5fa, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const slideFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ChatBubbleContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: ${(props) =>
    props.isInterviewer ? "flex-start" : "flex-end"};
  width: 100%;
  padding: 0 20px;
  opacity: 0;
  animation: ${(props) =>
      props.isInterviewer ? slideFromLeft : slideFromRight}
    0.8s ease-out forwards;
  animation-play-state: paused;

  .visible & {
    animation-play-state: running;
  }
`;

export const ChatBubbleContent = styled.div`
  max-width: 80%;
`;

export const ChatBubbleSpeaker = styled.div`
  color: #4fd1c5;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-family: "Do hyeon", sans-serif;
  text-align: ${(props) => (props.isInterviewer ? "left" : "right")};
`;

export const ChatBubbleText = styled.div`
  border-radius: 1.5rem;
  padding: 1.5rem;
  background-color: ${(props) => (props.isInterviewer ? "#1A1F2E" : "#4FD1C5")};
  color: ${(props) => (props.isInterviewer ? "white" : "#0B0F17")};
  font-size: 1rem;
  line-height: 1.6;
  font-family: "Kanit", sans-serif;
  font-weight: 600;

  p {
    margin: 0;
    word-break: keep-all;
    word-wrap: break-word;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: #4fd1c5;
  font-size: 2rem;
  animation: ${bounce} 2s infinite;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #38b2ac;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    bottom: 20px;
  }
`;
