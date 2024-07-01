import styled from "@emotion/styled";

export const Scene = styled.section`
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
  ::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 100%;
    height: 300dvh;
    background-color: rgba(0, 0, 0, 0.2);
  }
  &.one {
    background-image: url(${process.env.PUBLIC_URL + `assets/IntroImg1.jpg`});
  }
  &.two {
    background-image: url(${process.env.PUBLIC_URL + `assets/IntroImg0.jpg`});
  }
  &.three {
    background-image: url(${process.env.PUBLIC_URL + `assets/IntroImg2.jpg`});
  }
`;

export const Header = styled.header`
  z-index: 2;
  color: white;
  max-width: 80%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 1.5rem;
  text-align: center;
`;

export const Scene1HeaderH1 = styled.h1`
  &:hover {
    color: ${(props) => (props.isLast ? "#0c8ce9" : "white")};
  }
  z-index: 2;
  font-family: "Kanit", sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
  &:after {
    content: "";
    border-bottom: ${(props) => (props.isLast ? "none" : "3px solid white")};
    width: 12rem;
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
  }
`;

export const Scene1HeaderH2 = styled.h2`
  z-index: 2;
  font-family: "Do hyeon", sans-serif;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const Scene2Wrap = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 7rem;
  height: 90%;
`;

export const Scene2HeaderH1 = styled.h1`
  z-index: 2;
  font-family: "Kanit", sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
`;

export const GridContainer = styled.div`
  z-index: 2;
  display: grid;
  width: 90%;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  color: white;
  font-family: "Do hyeon", sans-serif;
`;

export const GridItem = styled.div`
  padding: 20px;
  width: 90%;
  text-align: center;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  p {
    font-size: 1.2em;
    margin-bottom: 5px;
  }
`;

export const GridHeader = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;
