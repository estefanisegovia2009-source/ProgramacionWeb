import { useState } from "react";

function ListaCompras() {
  const [texto, setTexto] = useState("");

  const [items, setItems] = useState([]);

  const agregarItem = () => {
    if (texto === "") {
      return;
    }

    const nuevoItem = {
      id: Date.now(),
      nombre: texto,
      comprado: false,
    };

    setItems([...items, nuevoItem]);
    setTexto("");
  };

  const cambiarEstado = (id) => {
    const nuevosItems = items.map((item) =>
      item.id === id
        ? { ...item, comprado: !item.comprado }
        : item
    );

    setItems(nuevosItems);
  };

  const eliminarItem = (id) => {
    const nuevosItems = items.filter((item) => item.id !== id);

    setItems(nuevosItems);
  };

  const faltanComprar = items.filter(
    (item) => item.comprado === false
  ).length;

  return (
    <div>
      <h2>Lista de compras</h2>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Agregar producto..."
      />

      <button onClick={agregarItem}>
        Agregar
      </button>

      <div>
        {items.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.comprado}
              onChange={() => cambiarEstado(item.id)}
            />

            <span
              style={{
                textDecoration: item.comprado
                  ? "line-through" : "none",
               
              }}
            >
              {item.nombre}
            </span>

            <button onClick={() => eliminarItem(item.id)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      <p>
        Faltan comprar: {faltanComprar}
      </p>
    </div>
  );
}

export default ListaCompras;