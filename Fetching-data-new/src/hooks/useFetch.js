
import { useEffect, useState } from "react";

function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setDatos(null);
      setError(null);
      setCargando(false);
      return;
    }

    const controller = new AbortController();
    let activo = true;

    async function obtenerDatos() {
      setCargando(true);
      setError(null);
      setDatos(null);

      try {
        const respuesta = await fetch(url, {
          signal: controller.signal,
        });

        if (!respuesta.ok) {
          throw new Error(
            `Error al obtener datos: ${respuesta.status}`
          );
        }

        const resultado = await respuesta.json();

        if (activo) {
          setDatos(resultado);
        }

      } catch (error) {
        if (activo && error.name !== "AbortError") {
          setError(error.message);
        }

      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    }

    obtenerDatos();

    return () => {
      activo = false;
      controller.abort();
    };

  }, [url]);

  return { datos, cargando, error };
}

export default useFetch;
