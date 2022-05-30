import React from "react";
import styles from "./Testimonials.module.scss";
import { ReactComponent as Quote } from "assets/icons/quotes.svg";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2>
          what our
          <br />
          customers say
        </h2>
        <div className={styles.testimonials__comments}>
          <div>
            <Quote />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </p>
          </div>
          <div>
            <Quote />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </p>
          </div>
          <div>
            <Quote />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </p>
          </div>
          <div>
            <Quote />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
