import "./App.css";
import Perfil from "./components/Perfil";
import TarjetaPelicula from "./components/TarjetaPelicula";
import React from "react";
import Contador from "./components/Contador";
import Panel from "./components/Acordeon";
import Buscador from "./components/Buscador";
import ListaCompras from "./components/Listadecompras";
function App() {
  const arregloELemento = [
    {
      nombresita: "Baggio",
      cc: "1Lt",
      id: 1,
    },
    {
      nombresita: "Cepita",
      cc: "500",
      id: 2,
    },
  ];

  const peliculas = [
  { id: 1, titulo: "Interstellar",     año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight",  año: 2008, vista: true  },
  { id: 3, titulo: "Inception",        año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer",      año: 2023, vista: true  },
];


  return (

    <>
    
      <Perfil nombre ="Estefani"/>
      <div >
        {peliculas.map((pelicula) => (
          <TarjetaPelicula
            key={pelicula.id}
            titulo={pelicula.titulo}
            año={pelicula.año}
            vista={pelicula.vista}
          />
        ))}
      </div>
<div>
  <Contador/>
</div>


<div>
   <Panel titulo="Panel de Estefani, Abri el panel para ver el contenido"
   contenido="Hoy tengo ganas de comer helado." />
   
</div>

<div>
  <Buscador/>
</div>

<div>
  <ListaCompras/>
</div>
    
    
    </>
  );
}


export default App;