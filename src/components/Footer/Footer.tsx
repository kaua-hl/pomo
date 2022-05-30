import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as LogoWhite } from "assets/icons/logo-white.svg";

const Footer = () => {
  return (
    <footer className={styles.bgFooter}>
      <div className={`${styles.footer} container`}>
        <div className={styles.footer__content}>
          <a href="/">
            <LogoWhite />
          </a>
          <ul>
            <h3>ABOUT</h3>
            <li>
              <a href="/">History</a>
            </li>
            <li>
              <a href="/">Partner</a>
            </li>
          </ul>
          <ul>
            <h3>PRIVACY</h3>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Faq</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
          </ul>
          <ul>
            <h3>PLANS</h3>
            <li>
              <a href="/">Our Plans</a>
            </li>
            <li>
              <a href="/">Testimonials</a>
            </li>
          </ul>
          <ul>
            <h3>CONTACT</h3>
            <li>
              <a href="/">(11) - 1111-1111</a>
            </li>
            <li>
              <a href="/">pomo@business.com</a>
            </li>
          </ul>
        </div>
        <p>All rigths reserved 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
