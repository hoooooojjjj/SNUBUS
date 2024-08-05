import React from "react";
import {
  Article,
  H2,
  Img,
  HeaderWrap,
  P,
  StyledCarousel,
  CarouselWrap,
  SlideItem,
  SlideText,
} from "./ArticleStyle";
import { useNavigate } from "react-router-dom";

/* - Articles 컴포넌트 (Headers 컴포넌트  하위)
    - 이 컴포넌트가 하는 일
        1. 해당 버스 이름 헤더 렌더링
            1. Component 기능으로 분리 →  ArticleHeader 컴포넌트
        2. 해당 버스 노선들 전처리 후 렌더링
            1. Component 기능으로 분리 →  BusRouteList 컴포넌트
        3. 해당 버스 노선 선택할 수 있는 슬라이드 렌더링
            1. Component 기능으로 분리 →  Slide 컴포넌트 */

// ArticleHeader 컴포넌트
function ArticleHeader({ info }) {
  return (
    <HeaderWrap>
      <Img src={process.env.PUBLIC_URL + `assets/${info.id}.svg`} />
      <H2>{info.name}</H2>
    </HeaderWrap>
  );
}

// 해당 버스 노선 리스트 컴포넌트
function BusRouteList({ info }) {
  // 버스 리스트 전처리 함수
  const PreprocessingBusList = () => {
    // 버스 리스트를 ,로 구분하여 출력
    const busList = info.buslist.map((bus, i) => {
      const PreprocessedbusList =
        bus.num + (i !== parseInt(info.buslist.length) - 1 ? ", " : "");

      return <span key={bus.num}>{PreprocessedbusList}</span>;
    });

    return busList;
  };

  return <P>{PreprocessingBusList()}</P>;
}

// 해당 버스 노선 선택할 수 있는 슬라이드 컴포넌트
function Slide({ info }) {
  const nav = useNavigate();

  // 해당 버스 노선 클릭 시 해당 노선 페이지로 이동
  const onBusNumClick = (bus) => {
    nav(`/view/${bus.num}`);
  };

  return (
    <CarouselWrap>
      <StyledCarousel arrows={true}>
        {info.buslist.map((bus) => (
          <SlideItem key={bus.num}>
            <SlideText onClick={() => onBusNumClick(bus)}>
              {bus.num}번 버스
            </SlideText>
          </SlideItem>
        ))}
      </StyledCarousel>
    </CarouselWrap>
  );
}

// Articles 컴포넌트(Main 컴포넌트 하위)
function Articles({ info }) {
  return (
    <Article>
      <ArticleHeader info={info} />
      <BusRouteList info={info} />
      <Slide info={info} />
    </Article>
  );
}

export default Articles;
