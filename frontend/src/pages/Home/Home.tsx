import HeroBanner from "../../components/HeroBanner/HeroBanner";
import styles from "./Home.module.scss";
export default function Home() {
  return (
    <div className={styles["home-page"]}>
      <HeroBanner className={styles["heroBanner"]}>MicoMind</HeroBanner>
      <p className="explanation-text">
        Somos una familia de productos de software robustos <br />
        y accesibles que utilicen la IA para generar un impacto <br />
        social y económico significativo a nivel nacional.
      </p>
    </div>
  );
}
