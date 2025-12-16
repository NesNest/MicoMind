import styles from "./HeroBanner.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function HeroBanner({ children, className }: Props) {
  return (
    <h1 className={`${styles["hero-banner"]} ${className || ""}`}>
      {children}
    </h1>
  );
}

export default HeroBanner;
