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
import busInfo from "../../../../../json/busInfo.json";
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
      <StationLineInfoWrap>
        {!window.matchMedia("(max-width: 550px)").matches ? (
          <>
            <InfoTextWrap>
              <InfoTextHeader>{curBusInfo.route}</InfoTextHeader>
              <InfoText
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <span>첫차 {curBusInfo.firstTm}</span>
                <span
                  style={{
                    width: "1px",
                    height: "20px",
                    background: "rgba(255,255,255,0.2)",
                    margin: "0 15px",
                  }}
                ></span>
                <span>막차 {curBusInfo.lastTm}</span>
              </InfoText>
              <InfoText>
                <strong style={{ color: "#0c8ce9" }}>배차간격</strong>
                <span style={{ marginLeft: "10px" }}>
                  {curBusInfo.interval}
                </span>
              </InfoText>
              <InfoText
                style={{
                  background:
                    busLength > 0
                      ? "rgba(12,140,233,0.2)"
                      : "rgba(253,151,39,0.2)",
                  border:
                    busLength > 0
                      ? "1px solid rgba(12,140,233,0.3)"
                      : "1px solid rgba(253,151,39,0.3)",
                }}
              >
                <strong>
                  {busLength > 0 ? (
                    `🚌 현재 ${busLength}대 운행중`
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
            <InfoText
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: 10,
                }}
              >
                <span>첫차 {curBusInfo.firstTm}</span>
                <span
                  style={{
                    width: "1px",
                    height: "20px",
                    background: "rgba(255,255,255,0.2)",
                    margin: "0 15px",
                  }}
                ></span>
                <span>막차 {curBusInfo.lastTm}</span>
              </div>
              <div
                style={{
                  background:
                    busLength > 0
                      ? "rgba(12,140,233,0.2)"
                      : "rgba(253,151,39,0.2)",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  textAlign: "center",
                  marginTop: "5px",
                }}
              >
                <strong>
                  {busLength > 0 ? (
                    `🚌 현재 ${busLength}대 운행중`
                  ) : (
                    <span style={{ color: "#fd9727" }}>⚠️ 운행종료</span>
                  )}
                </strong>
              </div>
            </InfoText>
            <InfoText>
              <strong style={{ color: "#0c8ce9" }}>배차간격</strong>
              <span style={{ marginLeft: "10px" }}>{curBusInfo.interval}</span>
            </InfoText>
          </InfoTextWrap>
        )}
      </StationLineInfoWrap>

      <MarkerInfoWrap>
        <InfoTextHeader>마커 정보</InfoTextHeader>
        {[
          { img: "/assets/currentMarker.webp", text: "현재 위치" },
          { img: "/assets/stationMarker.webp", text: "정류장" },
          { img: "/assets/busMarker.webp", text: "버스" },
        ].map((marker, index) => (
          <MarkerWrap key={index}>
            <MarkerInfoImg
              src={process.env.PUBLIC_URL + marker.img}
              alt={marker.text}
            />
            <MarkerInfoText>{marker.text}</MarkerInfoText>
          </MarkerWrap>
        ))}
      </MarkerInfoWrap>

      <InfoText
        onClick={() => nav("/")}
        style={{
          textAlign: "right",
          cursor: "pointer",
          width: "90%",
          padding: "10px 15px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "8px",
          transition: "all 0.2s ease",
          "&:hover": {
            background: "rgba(255,255,255,0.1)",
            transform: "translateX(-5px)",
          },
        }}
      >
        <QuestionCircleOutlined style={{ marginRight: "8px" }} />
        도움말
      </InfoText>
    </>
  );
}

export default InfoTab;
