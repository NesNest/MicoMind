import styles from "./Header.module.scss";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className={styles["header-container"]}>
      <h1 style={{ marginLeft: "1rem" }} className="navbrand">
        MicoMind
      </h1>
      <div style={{ display: "flex", gap: "1rem", marginRight: "1rem" }}>
        <Button>Sign In</Button>
        <Button>Register</Button>
      </div>
    </header>
  );
}
