import React, { useContext, useState } from "react";
import {
  Container,
  StationLineWrap,
  LogoText,
  StationLineInfoWrap,
  InfoTextWrap,
  InfoText,
  InfoTextHeader,
  FooterP,
  StationLineTabWrap,
  InfoTabBtn,
  StationTabBtn,
} from "./StationLineStyle";
import { InfoCircleOutlined, DownCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import busInfo from "../../../util/busInfo";
import { Link, useParams } from "react-router-dom";
import { ViewContext } from "../../../routes/View";
import MobileStationInfoModal from "../StationInfoModal/MobileStationInfoModal";
import StationTab from "./StationTab/StationTab";

const StationLine = ({ bus_stationData }) => {
  // 현재 파라미터 받아와서 버스 번호 확인
  const { id } = useParams();

  /* state 코드 */

  const [isInfoTab, setIsInfoTab] = useState(true);

  /* Context API 코드 */

  // view 페이지에서 받아온 context
  const {
    // infoWindow 열고 닫는 context
    isInfoWindowVisible,
    setIsInfoWindowVisible,
    // 클릭한 버스 정류장 정류 받아오는 context
    clickedStationInfo,
    // 폴리라인 열고 닫는 context
    isPolylinVisible,
    setIsPolylinVisible,
  } = useContext(ViewContext);

  /* redux 코드 */

  // 버스 개수 state
  const busLength = bus_stationData.busDataReducer.busInfo.length;

  /* 함수 코드 */

  // 탭 전환 함수
  const switchToInfoTab = () => {
    setIsInfoTab(true);
  };

  // 탭 전환 함수
  const switchToStationTab = () => {
    setIsInfoTab(false);
  };

  // 현재 페이지의 버스 정보만 필터링

  const curBusInfo = busInfo.map((bus) => {
    return bus.buslist.filter((bus) => bus.num === id);
  })[id === "관악02" ? 1 : 0][0];

  if (window.matchMedia("(max-width: 550px)").matches && isInfoWindowVisible) {
    return <MobileStationInfoModal curStation={clickedStationInfo} />;
  }

  return (
    <>
      <Container>
        <StationLineWrap>
          <LogoText>SNUBUS</LogoText>
          <StationLineTabWrap>
            <InfoTabBtn onClick={switchToInfoTab} isInfoTab={isInfoTab}>
              <InfoCircleOutlined />
              <br />
              정보
            </InfoTabBtn>
            <StationTabBtn onClick={switchToStationTab} isInfoTab={isInfoTab}>
              <DownCircleOutlined />
              <br />
              정류장
            </StationTabBtn>
          </StationLineTabWrap>
          <StationLineInfoWrap>
            {/* 데스크탑,랩탑 <-> 모바일에 따라 jsx 구조 변경 */}
            {!window.matchMedia("(max-width: 550px)").matches ? (
              <>
                <InfoTextWrap>
                  <InfoTextHeader>{curBusInfo.route}</InfoTextHeader>
                  <InfoText>
                    첫차 {curBusInfo.firstTm} | 막차 {curBusInfo.lastTm}
                  </InfoText>
                  <InfoText>
                    <strong>배차간격</strong> : {curBusInfo.interval}
                  </InfoText>
                  <InfoText>
                    <strong>
                      {busLength > 0 ? (
                        `현재 ${busLength}대 운행중`
                      ) : (
                        <span style={{ color: "#fd9727" }}>⚠️ 운행종료</span>
                      )}
                    </strong>
                  </InfoText>
                </InfoTextWrap>
              </>
            ) : (
              <InfoTextWrap>
                <InfoTextHeader>{curBusInfo.route}</InfoTextHeader>
                <InfoText>
                  {curBusInfo.firstTm} ~ {curBusInfo.lastTm} |{" "}
                  <strong>
                    {busLength > 0 ? (
                      `  현재 ${busLength}대 운행중`
                    ) : (
                      <span style={{ color: "#fd9727" }}>⚠️ 운행종료</span>
                    )}
                  </strong>
                </InfoText>
                <InfoText>
                  <strong>배차간격</strong> : {curBusInfo.interval}
                </InfoText>
              </InfoTextWrap>
            )}
          </StationLineInfoWrap>
          <StationTab
            isPolylinVisible={isPolylinVisible}
            setIsPolylinVisible={setIsPolylinVisible}
            setIsInfoWindowVisible={setIsInfoWindowVisible}
          />
        </StationLineWrap>
      </Container>
      <FooterP>
        아이콘 출처 :{" "}
        <Link to="https://www.flaticon.com/kr/free-icons/-">flaticon</Link>
      </FooterP>
    </>
  );
};

// 상태를 props로 매핑
function mapStateToProps(state) {
  return { bus_stationData: state };
}
export default connect(mapStateToProps)(StationLine);
