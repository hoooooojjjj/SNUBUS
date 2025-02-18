import React from "react";
import {
  Scene,
  Header,
  Scene1HeaderH1,
  Scene1HeaderH2,
  Scene2HeaderH1,
  GridContainer,
  GridItem,
  GridHeader,
  Scene2Wrap,
  ExplainWrap,
  ExplainHeader,
  ExplainImg,
  ExplainText,
  ExplainFlex,
  ViewImgWrap,
  Wrapper,
  Words,
  Span,
  ParallaxContainer,
} from "./ParallaxStyle";
import { Overlay } from "../../../Main/MainStyle";
import { useNavigate } from "react-router-dom";

function Scene1() {
  const navigate = useNavigate();

  // 메인 페이지로 이동
  const handleGoMain = () => {
    navigate("/");
  };

  return (
    <Scene className="one">
      <Header>
        <Scene1HeaderH1>
          To make your movement
          <strong>
            <Wrapper>
              More
              <Words>
                <Span></Span>
                <Span>customized</Span>
                <Span>trendy</Span>
                <Span>Useful</Span>
                <Span>Usable</Span>
                <Span>Affective</Span>
                <Span>Customer Oriented</Span>
              </Words>
              in SNU
            </Wrapper>
          </strong>
        </Scene1HeaderH1>
        <Scene1HeaderH2>
          서울대에서 당신의 이동이 <strong>'더 -'</strong> 하도록
        </Scene1HeaderH2>
        <Scene1HeaderH2 isLast={true} onClick={handleGoMain}>
          Click to Get started
        </Scene1HeaderH2>
      </Header>
    </Scene>
  );
}

const Scene2 = () => {
  return (
    <Scene className="two">
      <Scene2Wrap>
        <Scene2HeaderH1>SNUBUS, is More -</Scene2HeaderH1>
        <GridContainer>
          <GridItem>
            <GridHeader>customized</GridHeader>
            <p>서울대학교를 지나는 버스만</p>
            <p>서울대학교 노선만 집중적으로</p>
          </GridItem>
          <GridItem>
            <GridHeader>trendy</GridHeader>
            <p>기존 버스 서비스의 디자인을 탈피</p>
            <p>더 트렌디한 디자인</p>
          </GridItem>
          <GridItem>
            <GridHeader>Useful</GridHeader>
            <p>당신이 원하는 목적을 더 확실하게</p>
            <p>목적에 맞는 정보 제공</p>
          </GridItem>
          <GridItem>
            <GridHeader>Usable</GridHeader>
            <p>더 효율적이고 편리하게</p>
            <p>바쁜 당신의 시간을 절약할 수 있게</p>
          </GridItem>
          <GridItem>
            <GridHeader>Affective</GridHeader>
            <p>부드럽게 이어지는 인터랙션</p>
          </GridItem>
          <GridItem>
            <GridHeader>Customer Oriented</GridHeader>
            <p>빠른 피드백 수용과 반영</p>
          </GridItem>
        </GridContainer>
      </Scene2Wrap>
    </Scene>
  );
};

const Scene3 = () => {
  return (
    <Scene className="three">
      <ExplainWrap alignItems={"flex-end"}>
        <ExplainHeader>SNUBUS Main Page</ExplainHeader>
        {!window.matchMedia("(max-width: 550px)").matches ? (
          <ExplainFlex>
            <ExplainImg
              src={`${process.env.PUBLIC_URL + `assets/Explain0.webp`}`}
            ></ExplainImg>
            <div>
              <ExplainText>
                1️⃣ <strong>버스 종류</strong> : 찾으시는 버스 종류를 선택하실 수
                있는 탭입니다.
              </ExplainText>
              <ExplainText>
                2️⃣ <strong>소개</strong> : SNUBUS에 대한 소개 및 설명이 적혀있는
                페이지로 이동할 수 있는 탭입니다.
              </ExplainText>
              <ExplainText>
                3️⃣ <strong>문의</strong> : SNUBUS에 대해 어떤 문의든 이메일로
                보내실 수 있는 탭입니다.
              </ExplainText>
            </div>
          </ExplainFlex>
        ) : (
          <>
            <ExplainImg
              src={`${process.env.PUBLIC_URL + `assets/Explain0.webp`}`}
            ></ExplainImg>
            <ExplainText>
              1️⃣ <strong>버스 종류</strong> : 찾으시는 버스 종류를 선택하실 수
              있는 탭입니다.
            </ExplainText>
            <ExplainText>
              2️⃣ <strong>소개</strong> : SNUBUS에 대한 소개 및 설명이 적혀있는
              페이지로 이동할 수 있는 탭입니다.
            </ExplainText>
            <ExplainText>
              3️⃣ <strong>문의</strong> : SNUBUS에 대해 어떤 문의든 이메일로
              보내실 수 있는 탭입니다.
            </ExplainText>
          </>
        )}

        <ExplainText>
          4️⃣ <strong>해당 버스 정보</strong> : 선택하신 버스 종류(1️⃣)에 대한
          설명입니다. 어떤 버스 노선을 찾아보실 수 있는지 확인해보세요.
        </ExplainText>
        <ExplainText>
          5️⃣ <strong>View 페이지로 이동</strong> : 버튼 또는 화살표를 통해
          이동시켜 원하시는 버스 노선을 찾은 후 클릭하시면 해당 버스 노선의
          정보들을 확인하실 수 있는 페이지로 이동할 수 있는 버튼입니다.
        </ExplainText>
      </ExplainWrap>
    </Scene>
  );
};

const Scene4 = () => {
  return (
    <Scene className="four">
      <ExplainWrap alignItems={"center"}>
        <ExplainHeader>SNUBUS View Page</ExplainHeader>
        <ExplainImg
          src={`${process.env.PUBLIC_URL + `assets/Explain1.webp`}`}
        ></ExplainImg>
        <ExplainText>
          1️⃣ <strong>지도</strong> : 해당 버스 노선의 위치, 정류장 위치, 현재
          위치 등을 볼 수 있는 지도입니다. 위 새로고침을 눌러주시면 새로운
          정보를 접하실 수 있습니다.
        </ExplainText>
        <ExplainText>
          2️⃣ <strong>버스 노선 정보</strong> : 해당 버스 노선의 방면, 첫차 및
          막차, 배차 간격, 운행 대수 등의 정보를 확인하실 수 있습니다.
        </ExplainText>
        <ExplainText>
          3️⃣ <strong>마커 정보</strong> : 지도에 표시되는 마커의 의미를 파악할
          수 있습니다.
        </ExplainText>
      </ExplainWrap>
    </Scene>
  );
};

const Scene5 = () => {
  <Scene className="five">
    <ExplainWrap style={{ paddingTop: 10 }} alignItems={"center"}>
      <ViewImgWrap>
        <ExplainImg
          style={{
            width: !window.matchMedia("(max-width: 550px)").matches
              ? "48%"
              : "90%",
          }}
          src={`${process.env.PUBLIC_URL + `assets/Explain2.webp`}`}
        ></ExplainImg>
        <ExplainImg
          style={{
            width: !window.matchMedia("(max-width: 550px)").matches
              ? "48%"
              : "90%",
          }}
          src={`${process.env.PUBLIC_URL + `assets/Explain3.webp`}`}
        ></ExplainImg>
      </ViewImgWrap>
      <ExplainText>
        1️⃣ <strong>정보 - 정류장 선택 버튼</strong> : 해당 버스 노선의 정보
        보기, 정류장 보기를 선택하실 수 있습니다.
      </ExplainText>
      <ExplainText>
        2️⃣ <strong>방면 전환 버튼</strong> : 원하시는 방면을 선택하실 수
        있습니다.
      </ExplainText>
      <ExplainText>
        3️⃣ <strong>정류장 라인</strong> : 선택하신 방면의 정류장들을 확인하실 수
        있습니다. 정류장을 클릭하면 정류장 정보가 나타납니다.
      </ExplainText>
      <ExplainText>
        4️⃣ <strong>정류장 정보</strong> : 클릭하신 정류장(3️⃣)에 대한 정보입니다.
        해당 정류장의 위치, 막차, 도착예정 정보를 확인해보세요.
      </ExplainText>
    </ExplainWrap>
  </Scene>;
};

const Scene6 = () => {
  return (
    <Scene className="six">
      <ExplainWrap style={{ paddingTop: 10 }} alignItems={"center"}>
        <ExplainImg
          src={`${process.env.PUBLIC_URL + `assets/Explain4.webp`}`}
        ></ExplainImg>
        <ExplainText>
          1️⃣ <strong>노선 라인 켜기/끄기 버튼</strong> : 해당 방면의 노선 라인을
          지도에 표시할지 여부를 결정하실 수 있습니다.
        </ExplainText>
        <ExplainText>
          2️⃣ <strong>노선 라인</strong> : 노선 라인 켜기를 선택하여, 해당 방면의
          노선 라인이 표시된 모습입니다.
        </ExplainText>
      </ExplainWrap>
    </Scene>
  );
};

// Parallax 컴포넌트(Intro 컴포넌트 하위)
const Parallax = () => {
  return (
    <ParallaxContainer>
      <Overlay />
      <Scene1 />
      <Scene2 />
      <Scene3 />
      <Scene4 />
      <Scene5 />
      <Scene6 />
    </ParallaxContainer>
  );
};

export default Parallax;
