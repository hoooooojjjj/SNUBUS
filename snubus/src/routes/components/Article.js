import React from "react";
import { Article, H2, Img, HeaderWrap, P } from "./ArticleStyle";
import Slide from "./Slide";

function Articles({ info }) {
  return (
    <Article id={info.id}>
      <HeaderWrap>
        <Img src={process.env.PUBLIC_URL + `assets/${info.id}.png`} />
        <H2>{info.name}</H2>
      </HeaderWrap>
      <P>
        {info.buslist.map((busNum, i) => (
          <span>
            {busNum}
            {/* 마지막에는 , 없도록 */}
            {i !== parseInt(info.buslist.length) - 1 ? ", " : ""}
          </span>
        ))}
      </P>
      {/* <Slide info={info} /> */}
    </Article>
  );
}

export default Articles;
