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
} from "./ParallaxStyle";
import { Overlay } from "../MainStyle";
import { useNavigate } from "react-router-dom";

const Parallax = () => {
  const navigate = useNavigate();

  return (
    <>
      <Overlay />
      <Scene className="one">
        <Header>
          <Scene1HeaderH1>
            To make your movement <strong>' More - '</strong> in SNU
          </Scene1HeaderH1>
          <Scene1HeaderH2>
            서울대에서 당신의 이동이 <strong>'더 -'</strong> 하도록
          </Scene1HeaderH2>
        </Header>
      </Scene>
      <Scene className="two">
        <Scene2Wrap>
          <Scene2HeaderH1>More -</Scene2HeaderH1>
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
              <GridHeader>Usefulness</GridHeader>
              <p>당신이 원하는 목적을 더 확실하게</p>
              <p>목적에 맞는 정보 제공</p>
            </GridItem>
            <GridItem>
              <GridHeader>Usability</GridHeader>
              <p>더 효율적이고 편리하게</p>
              <p>바쁜 당신의 시간을 절약할 수 있게</p>
            </GridItem>
            <GridItem>
              <GridHeader>Affect</GridHeader>
              <p>부드럽게 이어지는 인터랙션</p>
            </GridItem>
            <GridItem>
              <GridHeader>Customer Orientation</GridHeader>
              <p>빠른 피드백 수용과 반영</p>
            </GridItem>
          </GridContainer>
        </Scene2Wrap>
      </Scene>
      <Scene className="three">
        <Header>
          <Scene1HeaderH1
            isLast={true}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Get Started!
          </Scene1HeaderH1>
        </Header>
      </Scene>
    </>
  );
};

export default Parallax;
