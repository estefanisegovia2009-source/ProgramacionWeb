function TarjetaPelicula({ titulo, año, vista }) {
  return (
    <div>
      <h2>
        {titulo} {vista && "✓"}
      </h2>

      <p>Año: {año}</p>
    </div>
  );
}

export default TarjetaPelicula;