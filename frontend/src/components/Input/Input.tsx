import styles from "./Input.module.scss";
import type React from "react";

type InputProps = {
  type: React.HTMLInputTypeAttribute;
  // children: React.ReactNode;
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
};
const Input = (props: InputProps) => {
  const {
    type,
    // children,
    label,
    value,
    placeholder,
    required,
    disabled,
    onChange,
    className,
  } = props;

  return (
    <div className={`${styles["input"]} ${className}`}>
      {label && <label>{label}</label>}
      <input
        className={styles["input__container"]}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};
export default Input;
