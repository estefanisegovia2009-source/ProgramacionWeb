
import Githubperfil from "./components/Githubperfil";
import BuscadorPokemon from "./components/BuscadorPokemon";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Ejercicios de Fetch en React</h1>

      <h2>Ejercicio 2 - Perfil de GitHub</h2>
      <Githubperfil />

      <hr />

      <h2>Ejercicio 3 - Buscador de Pokémon</h2>
      <BuscadorPokemon />
    </div>
  );
}

export default App;
