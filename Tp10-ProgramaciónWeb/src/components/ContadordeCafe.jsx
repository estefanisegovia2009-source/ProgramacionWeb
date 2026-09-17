import useContadorGuardado from "../hooks/useContadorGuardado";

function ContadordeCafe() {
  const { contador, sumar } = useContadorGuardado("cafes");

  return (
    <div>
      <h2>Cafés: {contador}</h2>

      <button onClick={sumar}>
        Sumar un cafecito
      </button>
    </div>
  );
}

export default ContadordeCafe;