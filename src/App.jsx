import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Persona from "./components/Persona";

function App() {
  const [count, setCount] = useState(0);
  const arregloELemento =[
   { nombresita : "Baggio",
    cc : "1Lt",
    id : 1
  }
  ,
  { 
    nombresita : "Cepita",
    cc : "500",
    id : 2
  }
]

  return (
    <>
    <Persona nombre="Mary" apellido="Paredes"/>
{arregloELemento.map((item, index)=>(
  
  <div key={item.id}>
    <p>Hola {item.nombresita}</p>
  
  </div>
  
))}

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

    
  
    </>
  );
}

export default App;
