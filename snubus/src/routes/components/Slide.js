import React from "react";
import { Carousel, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import { CarouselWrap, SlideItem, SlideText } from "./SlideStyle";

const Slide = ({ info }) => {
  const nav = useNavigate();

  return (
    // antd 사용자 정의 스타일
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            // 화살표 스타일
            arrowSize: 30,
            // dot 스타일
            dotActiveWidth: 40,
            dotWidth: 50,
            dotHeight: 7,
          },
        },
      }}
    >
      <CarouselWrap>
        <Carousel arrows={true} style={{ width: "40%", margin: "0 auto" }}>
          {info.buslist.map((busNum, i) => (
            <SlideItem key={i}>
              {/* {busNum}번 버스 보러가기 클릭시 해당 버스 view 컴포넌트로 라우팅 */}
              <SlideText
                onClick={() => {
                  nav(`/${busNum}`);
                }}
              >
                {busNum}번 버스 보러가기
              </SlideText>
            </SlideItem>
          ))}
        </Carousel>
      </CarouselWrap>
    </ConfigProvider>
  );
};

export default Slide;
