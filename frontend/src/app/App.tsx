import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";

// import { useEffect, useState } from "react";
// import { API_URL } from "../config.ts";

function App() {
  //   const [mensaje, setMensaje] = useState("");

  //   useEffect(() => {
  //     const apiUrl = `${API_URL}`;

  //     fetch(apiUrl)
  //       .then((res) => res.json())
  //       .then((data) => setMensaje(data.Hello))
  //       .catch((err) => console.error("Error al conectar con el backend:", err));
  //   }, []);

  //   return (
  //     <>
  //       <div>
  //         <p>Respuesta del backend: {mensaje}</p>{" "}
  //       </div>
  //     </>
  //   );
  // }

  // export default App;

  return <RouterProvider router={router} />;
}
export default App;
