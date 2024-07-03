import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  StationLineWrap,
  LogoText,
  FooterP,
  StationLineTabWrap,
  InfoTabBtn,
  StationTabBtn,
  BusSelectWrap,
  BusSelectBtn,
  BusSwitchBtn,
  BusSelectCloseBtn,
} from "./StationLineStyle";
import {
  InfoCircleOutlined,
  DownCircleOutlined,
  DownOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ViewContext } from "../../../routes/View";
import MobileStationInfoModal from "../StationInfoModal/MobileStationInfoModal";
import StationTab from "./StationTab/StationTab";
import InfoTab from "./InfoTab";

const StationLine = ({ bus_stationData }) => {
  // 현재 파라미터 받아와서 버스 번호 확인
  const { id } = useParams();

  /* state 코드 */

  // 정보 탭 <-> 정류장 탭 state
  const [isInfoTab, setIsInfoTab] = useState(true);

  // 다른 지선 버스 버튼 클릭 여부 state
  const [isBusSwitchBtnClicked, setIsBusSwitchBtnClicked] = useState(false);

  // 다른 지선 버스 번호 리스트 state
  const [busNumList, setBusNumList] = useState([]);

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

  /* 함수 코드 */

  // 탭 전환 함수
  const switchToInfoTab = () => {
    setIsInfoTab(true);
  };

  // 탭 전환 함수
  const switchToStationTab = () => {
    setIsInfoTab(false);
  };

  // 현 버스를 제외한 다른 지선 버스 리스트만 가져오기
  useEffect(() => {
    // 지선버스일 때만
    if (["5511", "5513", "5516"].includes(id)) {
      let busNumList = ["5511", "5513", "5516"];
      setBusNumList(
        busNumList.map((busNum) => {
          if (busNum !== id) {
            return busNum;
          }
        })
      );
    }
  }, []);

  if (window.matchMedia("(max-width: 550px)").matches && isInfoWindowVisible) {
    return <MobileStationInfoModal curStation={clickedStationInfo} />;
  }

  return (
    <>
      <Container>
        <StationLineWrap>
          {!isBusSwitchBtnClicked ? (
            busNumList.length > 0 ? (
              <BusSwitchBtn
                onClick={() => {
                  setIsBusSwitchBtnClicked(true);
                }}
              >
                다른 지선 버스 <DownOutlined />
              </BusSwitchBtn>
            ) : (
              <></>
            )
          ) : (
            <BusSelectWrap>
              <BusSelectCloseBtn
                onClick={() => {
                  setIsBusSwitchBtnClicked(false);
                }}
              >
                <CloseOutlined />
              </BusSelectCloseBtn>
              {busNumList &&
                busNumList.map((busNum) => (
                  <BusSelectBtn
                    key={Number(busNum)}
                    onClick={() => {
                      window.location.href = `/view/${busNum}`;
                    }}
                  >
                    {busNum}
                  </BusSelectBtn>
                ))}
            </BusSelectWrap>
          )}
          <LogoText>{id}</LogoText>
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
          {isInfoTab ? (
            <InfoTab bus_stationData={bus_stationData} />
          ) : (
            <StationTab
              isPolylinVisible={isPolylinVisible}
              setIsPolylinVisible={setIsPolylinVisible}
              setIsInfoWindowVisible={setIsInfoWindowVisible}
            />
          )}
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
