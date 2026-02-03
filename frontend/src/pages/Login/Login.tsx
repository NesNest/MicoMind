import styles from "./Login.module.scss";
import { ButtonLink } from "../../components/Button";
import Input from "../../components/Input/Input";
import GoogleLoginButton from "../../components/GoogleLogin/GoogleLoginButton";

export default function Login() {
  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-container__header"]}>
        <img src="./././././LogoMindMyviolet.png" alt="Logo MicoMind" />
        <h3 className={styles["login-container__title"]}>Inicio de sesión</h3>
        <p>
          Una plataforma de anotación de texto para preparar datos de alta
          calidad para modelos de lenguaje
        </p>
      </div>

      <div className={styles["login-container__buttons"]}>
        <GoogleLoginButton
          onLoginSucess={(token: string) => {
            localStorage.setItem("access_token", token);
            window.location.href = "/";
          }}
        />

        <p>o ingresa con tu correo electrónico</p>
        <Input type="string" placeholder="tucorreoejemplo.com"></Input>
        <ButtonLink
          variant="mcm-black"
          to="/login/email"
          className={styles["login-container__buttons__link"]}
        >
          Continuar
        </ButtonLink>
      </div>
    </div>
  );
}
