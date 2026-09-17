import useContadorGuardado from "../hooks/useContadorGuardado";

function ContadorDeVisitas() {
  const { contador, sumar } = useContadorGuardado("visitas");

  return (
    <div>
      <h2>Visitas: {contador}</h2>

      <button onClick={sumar}>
        Sumar visita
      </button>
    </div>
  );
}

export default ContadorDeVisitas;