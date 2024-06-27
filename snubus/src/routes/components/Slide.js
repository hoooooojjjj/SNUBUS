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
      <StyledCarousel arrows={true}>
        {info.buslist.map((bus) => (
          <SlideItem key={bus.num}>
            <SlideText onClick={() => nav(`/view/${bus.num}`)}>
              {bus.num}번 버스
            </SlideText>
          </SlideItem>
        ))}
      </StyledCarousel>
    </CarouselWrap>
  );
};

export default Slide;
