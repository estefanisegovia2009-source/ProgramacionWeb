import { useEffect, useState } from "react";

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      console.log("tic");
      setHora(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("intervalo apagado");
    };
  }, []);

  return (
    <div>
      <h2>{hora.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Reloj;