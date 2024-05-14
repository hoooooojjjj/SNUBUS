import React from "react";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";

const contentStyle = {
  margin: "0 auto",
  width: "70%",
  height: "400px",
  color: "#fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "#003287",
  borderRadius: "20px",
};

const Slide = ({ info }) => {
  const nav = useNavigate();
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} style={{ cursor: "pointer" }}>
      {info.buslist.map((busNum) => (
        <div
          onClick={() => {
            nav(`/${busNum}`);
          }}
        >
          <h1 style={contentStyle}>{busNum}</h1>
        </div>
      ))}
    </Carousel>
  );
};

export default Slide;
