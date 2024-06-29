import styled from "@emotion/styled";

export const Scene = styled.section`
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
  &.one {
    background-image: url(${process.env.PUBLIC_URL + `assets/IntroImg0.jpg`});
  }
  &.two {
    background-image: url(${process.env.PUBLIC_URL + `assets/IntroImg1.jpg`});
  }
  &.three {
    background-image: url(${process.env.PUBLIC_URL + `assets/IntroImg2.jpg`});
  }
`;

export const Header = styled.header`
  color: white;
  max-width: 80%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 1.5rem;
  text-align: center;
`;

export const SceneHeaderH1 = styled.h1`
  font-family: "Black han sans", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  &:after {
    content: "";
    border-bottom: 3px solid white;
    width: 10rem;
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
  }
`;

export const SceneHeaderH2 = styled.h2`
  font-family: "Do hyeon", sans-serif;
  font-size: 1.5rem;
  margin-top: 1rem;
`;
