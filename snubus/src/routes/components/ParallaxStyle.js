import styled from "@emotion/styled";

export const Scene = styled.section`
  height: 100dvh;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 200;
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
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 300;
  &:after {
    content: "";
    border-bottom: 1px solid white;
    width: 8rem;
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
  }
`;
