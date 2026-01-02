import styles from "./Login.module.scss";
import { Button, ButtonLogin, ButtonLink } from "../../components/Button";

export default function Login() {
  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-container__header"]}>
        <img src="./././././LogoMindMyviolet.png" alt="Logo MicoMind" />
        <h3 className={styles["login-container__title"]}>Inicio de sesión</h3>
        <p>Inicia sesión para continuar y guardar tus datos</p>
      </div>

      <div className={styles["login-container__buttons"]}>
        <ButtonLink
          to="/login/email"
          className={styles["login-container__buttons"]}
        >
          Continuar con Correo
        </ButtonLink>
        <p>o ingresa con Google</p>
        <ButtonLogin>Continuar con Google</ButtonLogin>
        <Button variant="mcm-black">Continuar</Button>
      </div>
    </div>
  );
}
