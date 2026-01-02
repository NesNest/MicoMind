import { Link } from "react-router-dom";
import type { ButtonVariant, ButtonSize } from "./button.types";
import styles from "./Button.module.scss";

type ButtonLinkProps = {
  children: React.ReactNode;
  to: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const ButtonLink = ({
  children,
  to,
  variant = "mcm-white",
  size = "md",
  className = "",
}: ButtonLinkProps) => {
  const variantClass = styles[variant] || "";
  const sizeClass = styles[size] || "";
  const classNames =
    `${styles.btn} ${variantClass} ${sizeClass} ${className}`.trim();

  return (
    <Link to={to} className={classNames}>
      {children}
    </Link>
  );
};
export default ButtonLink;
