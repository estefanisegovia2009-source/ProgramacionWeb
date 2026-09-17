import { useState } from "react";
import "./App.css";
import Reloj from "./components/Reloj";
import ContadorRenders from "./components/ContadorRenders";
import Ficha from "./components/Ficha";
import ContadorDeVisitas from "./components/ContadorDeVisitas";
import ContadordeCafe from "./components/ContadordeCafe";
import "./App.jsx";
import React from "react";
import useContadorGuardado from "./hooks/useContadorGuardado.js";

function App() {
  const [mostrarReloj, setMostrarReloj] = useState(true);

  return (
    <div>
      <h1>Ejercicio number One</h1>

      <button onClick={() => setMostrarReloj(!mostrarReloj)}>
        {mostrarReloj ? "Esconder reloj" : "Mostrar reloj"}
      </button>

      {mostrarReloj && <Reloj />}
   
   <ContadorRenders />
   
    <Ficha nombre="Estefani" rol="Alumna" />

       <ContadorDeVisitas />

      <ContadordeCafe />


    </div>
  
);
}

/*
Ejercicio 5:

1. El useEffect se ejecuta una y otra vez. Pide los datos,
los guarda y eso hace que la pantalla se actualice, entonces vuelve a empezar.
2 La pestaña se traba porque entra en un ciclo que no termina.
3 Si quiero que se ejecute una sola vez al principio, uso [].
4 Si quiero actualizar los datos, puedo hacerlo con un botón,
cuando cambia algo importante o cada cierto tiempo.
*/

export default App;