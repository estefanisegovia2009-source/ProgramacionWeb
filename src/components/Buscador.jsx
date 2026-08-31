import { useState } from "react";

function Buscador() {
  const [busqueda, setBusqueda] = useState("");

  const frutas = ["manzana", "pera", "naranja", "banana", "kiwi", "mango"];

  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar fruta preferida"
      />

      {frutasFiltradas.map((fruta) => (
        <p key={fruta}>{fruta}</p>
      ))}
    </div>
  );
}

export default Buscador;