import { useRef, useState } from "react";

function ContadorRenders() {
  const [clicks, setClicks] = useState(0);

  const renders = useRef(0);

  renders.current = renders.current + 1;

  return (
    <div>
      <h1>Ejercicio 2</h1>

      <p>Clicks: {clicks}</p>
      <p>Renders: {renders.current}</p>

      <button onClick={() => setClicks(clicks + 1)}>
        Hacer click
      </button>
    </div>
  );
}

export default ContadorRenders;