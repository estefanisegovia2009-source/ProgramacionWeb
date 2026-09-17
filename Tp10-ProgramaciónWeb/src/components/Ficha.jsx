import { useEffect, useState } from "react";

function Ficha({ nombre, rol }) {
  const clave = `favorito-${nombre}`;

  const [favorito, setFavorito] = useState(() => {
    const guardado = localStorage.getItem(clave);

    if (guardado === null) {
      return false;
    }

    return guardado === "true";
  });

  useEffect(() => {
    localStorage.setItem(clave, favorito.toString());
  }, [favorito, clave]);

  return (
    <div>
      <h1>Ejercicio 3</h1>

      <h2>{nombre}</h2>
      <p>Rol: {rol}</p>

      <button onClick={() => setFavorito(!favorito)}>
        {favorito ? "★ Favorito" : "☆ Agregar a favoritos"}
      </button>
    </div>
  );
}

export default Ficha;