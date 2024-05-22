import React from "react";
import { ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import {
  StyledCarousel,
  CarouselWrap,
  SlideItem,
  SlideText,
} from "./SlideStyle";
import { Carousel } from "antd";

const Slide = ({ info }) => {
  const nav = useNavigate();

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 30,
            dotActiveWidth: 40,
            dotWidth: 50,
            dotHeight: 7,
          },
        },
      }}
    >
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
    </ConfigProvider>
  );
};

export default Slide;
