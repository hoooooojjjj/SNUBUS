import React from "react";
import { Article, H2, Img, HeaderWrap } from "./ArticleStyle";
import Slide from "./Slide";

function Articles({ info }) {
  return (
    <Article id={info.id}>
      <HeaderWrap>
        <Img src={process.env.PUBLIC_URL + `assets/${info.id}.png`} />
        <H2>{info.name}</H2>
      </HeaderWrap>
      <Slide info={info} />
    </Article>
  );
}

export default Articles;
