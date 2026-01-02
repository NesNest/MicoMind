import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId=" 759861900036-dbrkr8tghvv0mlqh3hv9rsqear44np13.apps.googleusercontent.com">
      <BrowserRouter basename="/MicoMind">
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
