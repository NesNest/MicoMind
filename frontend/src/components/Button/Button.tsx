// import styles from "./Button.module.scss";
type Button = {
  children: React.ReactNode;
};

function Button({ children }: Button) {
  return (
    <button type="button" className={"btn btn-dark "}>
      {children}
    </button>
  );
}

export default Button;
