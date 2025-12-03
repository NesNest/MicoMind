import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
}
