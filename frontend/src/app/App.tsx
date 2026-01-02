import { Routes, Route } from "react-router-dom";
import MainLayout from "./../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "./../pages/Home/Home";
import Login from "./../pages/Login/Login";
import LoginEmail from "./../pages/Login/LoginEmail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="email" element={<LoginEmail />} />
      </Route>
    </Routes>
  );
}

export default App;
