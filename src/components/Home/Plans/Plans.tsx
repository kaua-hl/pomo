import React from "react";
import styles from "./Plans.module.scss";

const Plans = () => {
  return (
    <section className={styles.plans}>
      <div className="container">
        <h2>Plans</h2>
        <div className={styles.plans__content}>
          <div className={styles.plans__card}>
            <div>
              <h3>Bronze</h3>
              <ul>
                <li>Free for 30 days</li>
                <li>Limited downloads</li>
                <li>Notes</li>
              </ul>
              <div>
                <h4>
                  Free<span>/30 Days</span>
                </h4>
                <a href="#">Download</a>
              </div>
            </div>
          </div>
          <div className={styles.plans__card}>
            <div>
              <h3>Diamond</h3>
              <ul>
                <li>Access Unlimited</li>
                <li>Unlimited downloads</li>
                <li>Notes</li>
                <li>Community</li>
              </ul>
              <div>
                <h4>
                  $3<span>/ years</span>
                </h4>
                <a href="#">Buy</a>
              </div>
            </div>
          </div>
          <div className={styles.plans__card}>
            <div>
              <h3>Gold</h3>
              <ul>
                <li>Access Unlimited</li>
                <li>Unlimited downloads</li>
                <li>Notes</li>
              </ul>
              <div>
                <h4>
                  $5<span>/ years</span>
                </h4>
                <a href="#">Buy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
