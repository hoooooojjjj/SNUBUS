import React, { useEffect } from "react";
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
  HeaderContainer,
  InfoContainer,
  InfoBox,
  InfoLabel,
  InfoValue,
  BusTypeTag,
  BusTypeText,
} from "./ArticleStyle";
import { useNavigate } from "react-router-dom";
import { ArrowLeftRight, ArrowRightFromLine } from "lucide-react";

// ArticleHeader 컴포넌트
function ArticleHeader({ selectedBus }) {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <InfoContainer>
          <InfoBox>
            <InfoLabel>운행 지역</InfoLabel>
            <InfoValue isRoute={true}>
              <span>{selectedBus.btnName.end}</span>
              <ArrowLeftRight />
              <span>{selectedBus.btnName.start}</span>
            </InfoValue>
          </InfoBox>
          <InfoBox>
            <InfoLabel>운행 시간</InfoLabel>
            <InfoValue>
              <span>{selectedBus.firstTm}</span>
              <ArrowRightFromLine />
              <span>{selectedBus.lastTm}</span>
            </InfoValue>
          </InfoBox>
          <InfoBox>
            <InfoLabel>배차 간격</InfoLabel>
            <InfoValue style={{ whiteSpace: "wrap" }}>
              {selectedBus.interval}
            </InfoValue>
          </InfoBox>
        </InfoContainer>
      </HeaderWrap>
    </HeaderContainer>
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

  return (
    <>
      <P>{PreprocessingBusList()}</P>
    </>
  );
}

// 해당 버스 노선 선택할 수 있는 슬라이드 컴포넌트
function Slide({ info, selectedBus, setSelectedBus }) {
  const nav = useNavigate();

  const handleSlideChange = (currentSlide) => {
    // 현재 보이는 슬라이드의 버스 정보로 상태 업데이트
    const currentBus = info.buslist[currentSlide];
    setSelectedBus(currentBus);
  };

  const onBusNumClick = (bus) => {
    nav(`/view/${bus.num}`);
  };

  return (
    <CarouselWrap>
      <StyledCarousel
        arrows={true}
        afterChange={handleSlideChange} // 슬라이드 변경 후 호출되는 콜백
      >
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
  const [selectedBus, setSelectedBus] = React.useState(info.buslist[0]);

  return (
    <Article>
      <BusTypeTag>{info.name}</BusTypeTag>
      <BusRouteList info={info} />
      <Slide
        info={info}
        selectedBus={selectedBus}
        setSelectedBus={setSelectedBus}
      />
      <ArticleHeader info={info} selectedBus={selectedBus} />
    </Article>
  );
}

export default Articles;
