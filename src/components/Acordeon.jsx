import { useState } from "react";
function Panel({ titulo, contenido }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div>
      <button onClick={() => setAbierto(!abierto)}>
        {abierto ? "▼ " : "▲ " } {titulo}
      </button>

      {abierto && (
        <div className="contenido">
          <p>{contenido}</p>
        </div>
      )}
    </div>
  );
}

export default Panel;