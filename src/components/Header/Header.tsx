import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "assets/icons/logo.svg";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Logo />
      <button className={styles.buttonMobile}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Plans</a>
          </li>
          <li>
            <a className={styles.login} href="/">
              Log in
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
