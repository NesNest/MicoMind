import styles from "./Button.module.scss";
import type { ButtonVariant, ButtonSize } from "./button.types";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

function Button({
  children,
  variant = "mcm-primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const variantClass = styles[variant] || "";
  const sizeClass = styles[size] || "";
  const classNames =
    `${styles.btn} ${variantClass} ${sizeClass} ${className}`.trim();
  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
