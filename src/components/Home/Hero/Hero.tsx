import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.hero__content} container`}>
        <h1>Descubra sua melhor produtividade</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less
        </p>
        <a href="#">About More</a>
      </div>
    </section>
  );
};

export default Hero;
