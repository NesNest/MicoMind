import { useEffect, useState } from "react";
import { API_URL } from "./config";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const apiUrl = `${API_URL}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMensaje(data.Hello))
      .catch((err) => console.error("Error al conectar con el backend:", err));
  }, []);

  return (
    <>
      <div>
        <p>Respuesta del backend: {mensaje}</p>{" "}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
