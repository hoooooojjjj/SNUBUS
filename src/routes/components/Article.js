import React, { useState } from "react";
import { Article, H2, Img, HeaderWrap, P } from "./ArticleStyle";
import Slide from "./Slide";

function Articles({ info }) {
  const [showOver4, setShowOver4] = useState(false);

  const onClick = () => {
    setShowOver4(!showOver4);
  };

  return (
    <Article id={info.id}>
      <HeaderWrap>
        <Img src={process.env.PUBLIC_URL + `assets/${info.id}.webp`} />
        <H2>{info.name}</H2>
      </HeaderWrap>
      <P>
        {info.buslist.map((bus, i) => (
          <span key={bus.num} onClick={onClick}>
            {bus.num + (i !== parseInt(info.buslist.length) - 1 ? ", " : "")}
          </span>
        ))}
      </P>
      <Slide info={info} />
    </Article>
  );
}

export default Articles;
