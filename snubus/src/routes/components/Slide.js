import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledCarousel,
  CarouselWrap,
  SlideItem,
  SlideText,
} from "./SlideStyle";

const Slide = ({ info }) => {
  const nav = useNavigate();

  return (
    <CarouselWrap>
      <StyledCarousel>
        {info.buslist.map((busNum) => (
          <SlideItem key={busNum}>
            <SlideText onClick={() => nav(`/${busNum}`)}>
              {busNum}번 버스
            </SlideText>
          </SlideItem>
        ))}
      </StyledCarousel>
    </CarouselWrap>
  );
};

export default Slide;
