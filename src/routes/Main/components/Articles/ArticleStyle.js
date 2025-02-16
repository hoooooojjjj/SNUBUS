import styled from "@emotion/styled";
import { Font_DoHyeon, flex } from "../../../../util/publicStyleComponents";
import { Carousel } from "antd";

// article wrap
export const Article = styled.article({
  zIndex: 1,
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
  width: "100%",
  height: "85%",
  background: "rgba(31, 41, 55, 0.5)",
  backdropFilter: "blur(16px)",
  borderRadius: "16px",
  padding: "30px",

  "@media(max-width: 550px)": {
    width: "100%",
    height: "85%",
    ...flex("column", "center", "center"),
  },
  ...flex("column", "center", "normal"),
});

// article headerwrap
export const HeaderWrap = styled.div({
  width: "90%",
  height: "auto",
  padding: "20px",
  margin: "0 auto",
  borderRadius: "12px",
  ...flex("row", "center", "center"),
  "@media(max-width: 550px)": {
    width: "90%",
    padding: "15px",
  },
  // marginBottom: 25,
  transition: "background-color 0.3s ease",
});

// article img
export const Img = styled.img`
  width: 48px;
  height: 48px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

// article header
export const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(to right, #60a5fa, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// article p
export const P = styled.p({
  width: "90%",
  margin: "0px auto",
  padding: "20px",
  paddingTop: "50px",
  paddingBottom: "50px",
  ...Font_DoHyeon(),
  fontSize: 60,
  color: "#FFFFFF",
  background: "rgba(55, 65, 81, 0.3)",
  borderRadius: "12px",
  ...flex("row", "center", "center"),
  gap: 10,
  "@media(max-width: 768px)": {
    fontSize: 50,
    padding: "15px",
  },
  "@media(max-width: 550px)": {
    minWidth: "90%",
    textAlign: "center",
    fontSize: 40,
  },
});

// Slide
const SlideItemHeight = "120px";
const SlideItemHeight_under485 = "100px";

// Carousel wrap
export const CarouselWrap = styled.div({
  width: "90%",
  margin: "20px auto",
  padding: "20px",
  borderRadius: "12px",

  background: "rgba(31, 41, 55, 0.5)",
  backdropFilter: "blur(16px)",
  "@media(max-width: 550px)": {
    maxWidth: "90%",
  },
});

export const StyledCarousel = styled(Carousel)`
  width: 45%;
  margin: 0 auto;
  .slick-prev,
  .slick-next {
    font-size: 20px;
    color: white;
    &:hover {
      color: #ddd;
    }
  }
  @media (max-width: 550px) {
    width: 90%;
  }
`;

// 슬라이드 컴포넌트
export const SlideItem = styled.div({
  height: SlideItemHeight,
  margin: "10px",
  borderRadius: "12px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
  },
  "@media(max-width: 485px)": {
    height: SlideItemHeight_under485,
  },
});

// 슬라이드 안에 텍스트 컴포넌트
export const SlideText = styled.p({
  ...flex("column", "center", "center"),
  margin: "0 auto",
  width: "80%",
  lineHeight: SlideItemHeight,
  ...Font_DoHyeon(),
  fontSize: 45,
  background: "linear-gradient(to right, #60A5FA, #34D399)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  paddingRight: "20px",
  cursor: "pointer",
  "@media(max-width: 768px)": {
    fontSize: 40,
  },
  "@media(max-width: 485px)": {
    fontSize: 35,
    lineHeight: SlideItemHeight_under485,
  },
  "@media(max-width: 320px)": {
    fontSize: 30,
  },
});

export const ArticleContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  margin: 20px 0;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #faf7f2;
  }
`;

export const ArticleTitle = styled.h2`
  color: #2c1810;
  margin-bottom: 10px;
`;

export const ArticleContent = styled.p`
  color: #5c4d44;
  line-height: 1.6;
`;

export const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  background: linear-gradient(
    145deg,
    rgba(55, 65, 81, 0.4),
    rgba(31, 41, 55, 0.6)
  );
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  padding: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 550px) {
    min-width: 90%;
    padding: 0.5rem;
    margin-bottom: 0rem;
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoBox = styled.div`
  background: rgba(55, 65, 81, 0.3);
  border-radius: 16px;
  padding: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background: rgba(55, 65, 81, 0.4);
  }

  @media (max-width: 550px) {
    padding: 0.7rem;
  }
`;

export const InfoLabel = styled.div`
  color: rgb(156, 163, 175);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const InfoValue = styled.div`
  color: #fff;
  font-size: ${({ isRoute }) => (isRoute ? "1.5rem" : "1.5rem")};
  white-space: nowrap;
  font-weight: 600;
  background: linear-gradient(to right, #60a5fa, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  @media (max-width: 550px) {
    font-size: ${({ isRoute }) => (isRoute ? "1rem" : "1rem")};
    gap: 10px;
  }
`;
