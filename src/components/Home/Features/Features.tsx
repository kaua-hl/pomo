import React from "react";
import styles from "./Features.module.scss";
import { ReactComponent as Time } from "assets/icons/time.svg";
import { ReactComponent as FreeTime } from "assets/icons/free-time.svg";
import { ReactComponent as Work } from "assets/icons/work.svg";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>
          How we can
          <br />
          help you
        </h1>
        <div className={styles.features__content}>
          <div>
            <Time />
            <h3>Time</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
            </p>
          </div>
          <div>
            <FreeTime />
            <h3>Free Time</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
            </p>
          </div>
          <div>
            <Work />
            <h3>Work</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
