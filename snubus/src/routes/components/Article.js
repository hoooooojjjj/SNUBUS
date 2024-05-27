import React, { useState } from "react";
import { Article, H2, Img, HeaderWrap, P } from "./ArticleStyle";
import Slide from "./Slide";

function Articles({ info }) {
  const [showOver4, setShowOver4] = useState(false);

  const onClick = () => {
    console.log("Button clicked");
    setShowOver4(!showOver4);
  };

  return (
    <Article id={info.id}>
      <HeaderWrap>
        <Img src={process.env.PUBLIC_URL + `assets/${info.id}.png`} />
        <H2>{info.name}</H2>
      </HeaderWrap>
      <P>
        {info.buslist.map((busNum, i) => (
          <span key={busNum} onClick={onClick}>
            {showOver4
              ? busNum +
                (i !== parseInt(info.buslist.length) - 1 ? ", " : " (닫기)")
              : i > 3
              ? ""
              : busNum +
                (i < 3
                  ? i !== parseInt(info.buslist.length) - 1
                    ? ", "
                    : ""
                  : " . . . (더 보기)")}
          </span>
        ))}
      </P>
      <Slide info={info} />
    </Article>
  );
}

export default Articles;
