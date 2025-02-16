import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { flex } from "../../util/publicStyleComponents";

// fadeOut 애니메이션 정의
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// 부드러운 페이드인 애니메이션
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 메인 페이지 컨테이너
export const Containers = styled.div`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  background-color: #111827;
  color: white;
`;

// 배경 전환 시 애니메이션 재실행될 요소
export const Overlay = styled.div`
  width: 100dvw;
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(17, 24, 39, 0.8),
    rgba(17, 24, 39, 0.6)
  );
  animation: ${fadeOut} 2s forwards;
  backdrop-filter: blur(8px);
`;

/* main */

// main wrap
export const MainWrap = styled.main({
  position: "relative",
  // width: "100%",
  height: "100dvh",
  animation: `${fadeIn} 1s ease-out`,
  ...flex("column", "flex-start", "center"),
  padding: "0 20px",

  "@media (max-width: 768px)": {
    padding: "0 16px",
  },
  "@media (max-width: 550px)": {
    ...flex("column", "center", "center"),
  },
});

export const MainContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 20px;
  }
`;

export const GradientText = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(to right, #60a5fa, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SubText = styled.p`
  color: #9ca3af;
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContentBox = styled.div`
  background: rgba(31, 41, 55, 0.5);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  background: rgba(55, 65, 81, 0.3);
  padding: 16px;
  border-radius: 12px;
  text-align: center;

  h3 {
    color: #9ca3af;
    font-size: 0.875rem;
    margin-bottom: 8px;
  }

  p {
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 16px;
  background: linear-gradient(to top, rgba(17, 24, 39, 0.9), transparent);
  text-align: center;
  color: #9ca3af;
`;
