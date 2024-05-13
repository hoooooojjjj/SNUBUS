import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  margin: "0 auto",
  width: "70%",
  height: "300px",
  color: "#fff",
  lineHeight: "300px",
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
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default Slide;
