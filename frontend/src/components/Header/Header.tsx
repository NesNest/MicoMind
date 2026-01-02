import { useState } from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import LinkButton from "../Button/ButtonLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles["header-container"]}>
      <div className={styles.navbrand}>
        <img src="./LogoMindMywhiteveiolet.png" alt="MicoMind Logo" />
        <h1>MicoMind</h1>
      </div>

      <div className={styles.navbuttons}>
        <Button variant="mcm-signin">Sign In</Button>

        <LinkButton to="/login">Login</LinkButton>
      </div>

      <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <Button variant="mcm-signin">Sign In</Button>
        <LinkButton to="/login">Login</LinkButton>
      </div>
    </header>
  );
}
