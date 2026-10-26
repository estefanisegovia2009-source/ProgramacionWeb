
import { useEffect, useState } from "react";

function GithubProfile() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function obtenerPerfil() {
      try {
        setCargando(true);
        setError(null);

        const respuesta = await fetch(
          "https://api.github.com/users/estefanisegovia2009-source",
          { signal: controller.signal }
        );

        if (!respuesta.ok) {
          throw new Error("No se encontró el usuario");
        }

        const resultado = await respuesta.json();

        setDatos(resultado);

      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    }

    obtenerPerfil();

    return () => controller.abort();
  }, []);

  return (
    <div>
      <h2>Mi perfil de GitHub</h2>

      {cargando && <p>Cargando...</p>}

      {error && <p>Error: {error}</p>}

      {!cargando && !error && datos && (
        <div>
          <img
            src={datos.avatar_url}
            alt="Foto de perfil"
            width="150"
          />

          <h3>{datos.name || datos.login}</h3>

          <p>
            Repositorios públicos: {datos.public_repos}
          </p>
        </div>
      )}
    </div>
  );
}

export default GithubProfile;
