import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div
        style={{
          background: `url(${
            process.env.PUBLIC_URL + `assets/introImg${offset}.jpg`
          })`,
          backgroundSize: "cover",
          width: `calc(100vw + 300px)`,
          height: "100dvh",
        }}
      >
        <div
          style={{ width: `calc(100vw + 300px)` }}
          className={styles.slopeBegin}
        />
      </div>
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
        pages={3}
        horizontal
      >
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  );
}
