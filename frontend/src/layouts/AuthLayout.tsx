import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";

export default function AuthLayout() {
  return (
    <>
      <main className={styles["auth-layout"]}>
        <Outlet />
      </main>
    </>
  );
}
