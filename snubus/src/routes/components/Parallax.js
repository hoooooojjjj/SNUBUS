import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import { SlopeBeginContainer } from "./ParallaxStyle";

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0} onClick={onClick}>
      <SlopeBeginContainer
        offset={offset}
        className={styles.slopeBeginContainer}
      >
        <div className={styles.slopeBegin} />
      </SlopeBeginContainer>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      <span style={{ color: "red", fontSize: 100 }}>0{offset + 1}</span>
    </ParallaxLayer>
  </>
);

export default function Parallaxs() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div style={{ background: "#dfdfdf" }}>
      <Parallax
        className={styles.container}
        ref={parallax}
        pages={2}
        horizontal
      >
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  );
}
