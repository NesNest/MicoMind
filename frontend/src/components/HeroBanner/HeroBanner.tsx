import styles from "./HeroBanner.module.scss";

type Props = {
  children: React.ReactNode;
};

function HeroBanner({ children }: Props) {
  return <h1 className={styles["hero-banner"]}>{children}</h1>;
}

export default HeroBanner;
