
import { useRef, useState, useEffect } from "react";

function PokemonSearch() {
  const [nombre, setNombre] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const ultimaBusqueda = useRef(0);
  const montado = useRef(true);

  useEffect(() => {
    montado.current = true;
    return () => {
      montado.current = false;
    };
  }, []);

  async function buscarPokemon() {
    const nombrePokemon = nombre.trim().toLowerCase();

    if (!nombrePokemon) return;

    const numeroBusqueda = ++ultimaBusqueda.current;

    setCargando(true);
    setError(null);
    setPokemon(null);

    try {
      const respuesta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nombrePokemon)}`
      );

      if (!respuesta.ok) {
        throw new Error("Pokémon no encontrado");
      }

      const datos = await respuesta.json();

      if (montado.current &&
          numeroBusqueda === ultimaBusqueda.current) {
        setPokemon(datos);
      }

    } catch (error) {
      if (montado.current &&
          numeroBusqueda === ultimaBusqueda.current) {
        setError(error.message);
      }

    } finally {
      if (montado.current &&
          numeroBusqueda === ultimaBusqueda.current) {
        setCargando(false);
      }
    }
  }

  return (
    <div>
      <h2>Buscador de Pokémon</h2>

      <input
        type="text"
        placeholder="Nombre del Pokémon"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button onClick={buscarPokemon}>
        Buscar
      </button>

      {cargando && <p>Cargando...</p>}

      {error && <p>{error}</p>}

      {!cargando && !error && pokemon && (
        <div>
          <h3>{pokemon.name}</h3>

          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />

          <p>
            Tipo: {pokemon.types
              .map((tipo) => tipo.type.name)
              .join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default PokemonSearch;
