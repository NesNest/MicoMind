import { useState } from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles["header-container"]}>
      <div className={styles.navbrand}>
        <img src="/LogoMindMywhiteveiolet.png" alt="MicoMind Logo " />
        <h1>MicoMind</h1>
      </div>

      <div className={styles.navbuttons}>
        <Button>Resources</Button>
        <Button>Contact</Button>
        <Button variant="mcm-sign">Sign In</Button>
        <Button variant="mcm-login">Register</Button>
      </div>

      <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <Button>Resources</Button>
        <Button>Contact</Button>
        <Button variant="mcm-sign">Sign In</Button>
        <Button variant="mcm-login">Register</Button>
      </div>
    </header>
  );
}
