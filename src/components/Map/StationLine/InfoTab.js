import React from "react";
import {
  StationLineInfoWrap,
  InfoTextWrap,
  InfoText,
  InfoTextHeader,
  MarkerInfoWrap,
  MarkerInfoImg,
  MarkerInfoText,
  MarkerWrap,
} from "../StationLine/StationLineStyle";
import { QuestionCircleOutlined } from "@ant-design/icons";
import busInfo from "../../../json/busInfo.json";
import { useNavigate, useParams } from "react-router-dom";

function InfoTab({ bus_stationData }) {
  // 현재 파라미터 받아와서 버스 번호 확인
  const { id } = useParams();

  const nav = useNavigate();

  /* redux 코드 */

  // 버스 개수 state
  const busLength = bus_stationData.busDataReducer.busInfo.length;

  // 현재 페이지의 버스 정보만 필터링
  const curBusInfo = busInfo.map((bus) => {
    return bus.buslist.filter((bus) => bus.num === id);
  })[id === "관악02" ? 1 : 0][0];

  return (
    <>
      <StationLineInfoWrap style={{ textAlign: "left" }}>
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
      </StationLineInfoWrap>{" "}
      <MarkerInfoWrap>
        <InfoTextHeader>마커 정보</InfoTextHeader>
        <MarkerWrap>
          <MarkerInfoImg
            src={process.env.PUBLIC_URL + "/assets/currentMarker.webp"}
          />
          <MarkerInfoText>현재 위치</MarkerInfoText>
        </MarkerWrap>
        <MarkerWrap>
          <MarkerInfoImg
            src={process.env.PUBLIC_URL + "/assets/stationMarker.webp"}
          />
          <MarkerInfoText>정류장</MarkerInfoText>
        </MarkerWrap>
        <MarkerWrap>
          <MarkerInfoImg
            src={process.env.PUBLIC_URL + "/assets/busMarker.webp"}
          />
          <MarkerInfoText>버스</MarkerInfoText>
        </MarkerWrap>
      </MarkerInfoWrap>
      <InfoText
        onClick={() => {
          nav("/intro");
        }}
        style={{
          textAlign: "right",
          cursor: "pointer",
          width: "90%",
        }}
      >
        <strong>
          <QuestionCircleOutlined />{" "}
        </strong>
        도움말
      </InfoText>
    </>
  );
}

export default InfoTab;
