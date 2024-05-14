import React from "react";
import { Article, H2 } from "./ArticleStyle";
import Slide from "./Slide";

function Articles({ info }) {
  return (
    <Article id={info.id}>
      <H2>{info.name}</H2>
      <Slide />
    </Article>
  );
}

export default Articles;
