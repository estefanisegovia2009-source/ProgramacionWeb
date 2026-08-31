import { useState } from "react";
function Contador() {
  const [couteo, setConteo] = useState(0);
  const sumar = () => {
    setConteo(couteo + 1);
  };

  const restar = () => {
    if (couteo > 0) {
      setConteo(couteo - 1);
    }
  };

  const resetear = () => {
    setConteo(0);
  } 
  return (
    
    <div>
        <h1>Contador: {couteo}</h1>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={resetear}>Resetear</button>
    </div>
  );
}                   

export default Contador;