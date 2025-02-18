import React, { useEffect, useRef } from "react";
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
  Wrapper,
  Words,
  Span,
  ParallaxContainer,
  ScrollIndicator,
} from "./ParallaxStyle";
import { Overlay } from "../../../Main/MainStyle";
import { useNavigate } from "react-router-dom";
import ChatBubble from "./ChatBubble";
import { ChevronsDown } from "lucide-react";

function Scene1() {
  const navigate = useNavigate();

  // 메인 페이지로 이동
  const handleGoMain = () => {
    navigate("/main");
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
          Click to Get started Right Now!
        </Scene1HeaderH2>
      </Header>
      <ScrollIndicator>
        <ChevronsDown size={40} />
      </ScrollIndicator>
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
      <ScrollIndicator>
        <ChevronsDown size={40} />
      </ScrollIndicator>
    </Scene>
  );
};

const commonSceneStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const Scene3 = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    return () => {
      if (sceneRef.current) {
        observer.unobserve(sceneRef.current);
      }
    };
  }, []);

  return (
    <Scene className="three">
      <div style={commonSceneStyle} ref={sceneRef}>
        <ChatBubble
          speaker="인터뷰어"
          text="안녕하세요! SNUBUS 서비스를 개발하셨다고 들었는데요, 어떻게 시작하게 되셨나요?"
          isInterviewer={true}
        />
        <ChatBubble
          speaker="SONO"
          text="안녕하세요! 서울대학교 캠퍼스가 워낙 넓다 보니, 학생들이 이동에 불편을 겪는다는 이야기를 많이 들었어요. 셔틀버스도 있지만 모든 경로를 커버하지 못하고, 배차 간격도 길어서 불편하다는 의견이 많았죠. 그래서 더 편리한 이동 방법을 고민하다가 SNUBUS를 개발하게 되었습니다."
          isInterviewer={false}
        />
      </div>
      <ScrollIndicator>
        <ChevronsDown size={40} />
      </ScrollIndicator>
    </Scene>
  );
};

const Scene4 = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    return () => {
      if (sceneRef.current) {
        observer.unobserve(sceneRef.current);
      }
    };
  }, []);

  return (
    <Scene className="four">
      <div style={commonSceneStyle} ref={sceneRef}>
        <ChatBubble
          speaker="인터뷰어"
          text="그렇군요! SNUBUS는 어떤 기능을 제공하나요?"
          isInterviewer={true}
        />
        <ChatBubble
          speaker="SONO"
          text="SNUBUS는 서울대학교를 지나는 버스들의 실시간 위치, 배차 간격, 정류장 위치, 혼잡도, 경로 등 다양한 정보를 한눈에 확인할 수 있도록 했습니다. 이를 통해 학생들이 더 효율적으로 이동할 수 있도록 도와주고자 합니다."
          isInterviewer={false}
        />
      </div>
      <ScrollIndicator>
        <ChevronsDown size={40} />
      </ScrollIndicator>
    </Scene>
  );
};

const Scene5 = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    return () => {
      if (sceneRef.current) {
        observer.unobserve(sceneRef.current);
      }
    };
  }, []);

  return (
    <Scene className="five">
      <div style={commonSceneStyle} ref={sceneRef}>
        <ChatBubble
          speaker="인터뷰어"
          text="정말 유용한 서비스네요! 개발하면서 재미있는 에피소드가 있었나요?"
          isInterviewer={true}
        />
        <ChatBubble
          speaker="SONO"
          text="처음에는 버스 노선을 저도 잘 알지 못했는데, 개발하면서 모든 버스 노선을 외워버렸습니다;;"
          isInterviewer={false}
        />
      </div>
      <ScrollIndicator>
        <ChevronsDown size={40} />
      </ScrollIndicator>
    </Scene>
  );
};

const Scene6 = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    return () => {
      if (sceneRef.current) {
        observer.unobserve(sceneRef.current);
      }
    };
  }, []);

  return (
    <Scene className="six">
      <div style={commonSceneStyle} ref={sceneRef}>
        <ChatBubble
          speaker="인터뷰어"
          text="앞으로의 계획은 어떻게 되시나요?"
          isInterviewer={true}
        />
        <ChatBubble
          speaker="SONO"
          text="아직 완전히 완성된 것은 아니지만, 지속적으로 개발하여 더 많은 학생들이 편리하게 사용할 수 있도록 노력하고 있습니다. 사용자 피드백을 반영하여 기능을 개선하고, 더 다양한 정보를 제공할 수 있도록 업데이트를 진행할 예정입니다."
          isInterviewer={false}
        />
      </div>
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
