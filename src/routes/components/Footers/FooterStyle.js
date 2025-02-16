import styled from "@emotion/styled";
import { flex, Font_NanumSquare } from "../../../util/publicStyleComponents";

/* footer */
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterPWrap = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const FooterP = styled.p`
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #9ca3af;
  transition: color 300ms;
  &:hover {
    color: white;
  }
  font-size: 1.2rem;
`;

export const GradientSpan = styled.span`
  font-weight: 500;
  background: linear-gradient(to right, #60a5fa, #4ade80);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
