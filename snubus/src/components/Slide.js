import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  margin: "0 auto",
  width: "70%",
  height: "400px",
  color: "#fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "#364d79",
};

const Slide = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <h1 style={contentStyle}>5511</h1>
      </div>
      <div>
        <h1 style={contentStyle}>5513</h1>
      </div>
      <div>
        <h1 style={contentStyle}>5515</h1>
      </div>
      <div>
        <h1 style={contentStyle}>5516</h1>
      </div>
    </Carousel>
  );
};

export default Slide;
