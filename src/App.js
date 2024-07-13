import { useState } from "react";
import "./App.css";
import Frutas from "./Components/Frutas/Frutas";
import Hortalizas from "./Components/Hortalizas/Hortalizas";
import Verduras from "./Components/Verduras/Verduras";
import Especias from "./Components/Especias/Especias";
import Form from "./Components/Form/Form";
import Form2 from "./Components/Form2/Form2";
import Form3 from "./Components/Form3/Form3";
import Form4 from "./Components/Form4/Form4";
import Prueba from "./Components/Prueba/Prueba";

function App() {
  // const frutas = [
  //   {
  //     nombre: "Manzana",
  //     color: "Rojo",
  //   },
  //   {
  //     nombre: "Plátano",
  //     color: "Amarillo",
  //   },
  //   {
  //     nombre: "Naranja",
  //     color: "Naranja",
  //   },
  //   {
  //     nombre: "Uva",
  //     color: "Morado",
  //   },
  //   {
  //     nombre: "Limón",
  //     color: "Verde",
  //   },
  // ];

  // const hortalizas = [
  //   {
  //     nombre: "Zanahoria",
  //     color: "Naranja",
  //   },
  //   {
  //     nombre: "Cebolla",
  //     color: "Blanco",
  //   },
  //   {
  //     nombre: "Rábano",
  //     color: "Rojo",
  //   },
  //   {
  //     nombre: "Remolacha",
  //     color: "Morado",
  //   },
  //   {
  //     nombre: "Ajo",
  //     color: "Blanco",
  //   },
  // ];

  // const verduras = [
  //   {
  //     nombre: "Espinaca",
  //     color: "Verde",
  //   },
  //   {
  //     nombre: "Lechuga",
  //     color: "Verde",
  //   },
  //   {
  //     nombre: "Brócoli",
  //     color: "Verde",
  //   },
  //   {
  //     nombre: "Repollo",
  //     color: "Verde",
  //   },
  //   {
  //     nombre: "Coliflor",
  //     color: "Blanco",
  //   },
  // ];

  // const especias = [
  //   {
  //     nombre: "Cúrcuma",
  //     color: "Amarillo",
  //   },
  //   {
  //     nombre: "Cardamomo",
  //     color: "Verde",
  //   },
  //   {
  //     nombre: "Comino",
  //     color: "Marrón",
  //   },
  //   {
  //     nombre: "Clavo",
  //     color: "Marrón Oscuro",
  //   },
  //   {
  //     nombre: "Cilantro",
  //     color: "Verde",
  //   },
  // ];

  // const [fruits, setFruits] = useState(frutas);
  // const [hort, setHort] = useState(hortalizas);
  // const [vegetable, setVegetable] = useState(verduras);
  // const [spices, setSpices] = useState(especias);
  // const [fruitsTitle, setFruitsTitle] = useState("Frutas");
  // const [hortTitle, setHortTitle] = useState("Hortalizas");
  // const [VegetableTitle, setVegetableTitle] = useState("Verduras");
  // const [spicesTitle, setSpicesTitle] = useState("Especias");

  // function changeState(e) {
  //   alert("toca aceptar y van a cambiar las Frutas a Especias!");
  //   setFruits(especias);
  //   setFruitsTitle(e.target.innerText);
  // }

  // function changeState2(e) {
  //   alert("toca aceptar y van a cambiar las Hortalizas a Verduras");
  //   setHort(verduras);
  //   setHortTitle(e.target.innerText);
  // }

  // function changeState3(e) {
  //   alert("toca aceptar y van a cambiar las Verduras a Frutas");
  //   setVegetable(frutas);
  //   setVegetableTitle(e.target.innerText);
  // }

  // function changeState4(e) {
  //   alert("toca aceptar y van a cambiar las Especias a Hortalizas");
  //   setSpices(hortalizas);
  //   setSpicesTitle(e.target.innerText);
  // }

  return (
    <div className="App">
      {/* <Form /> */}
      {/* <Form2 /> */}
      <Form3 />
      <Form4 />
      <Prueba />

      {/* <button className="app-button" onClick={changeState}>
        De frutas a Especias
      </button>
      <button className="app-button" onClick={changeState2}>
        De Hortalizas a Verduras
      </button>
      <button className="app-button" onClick={changeState3}>
        De Verduras a Frutas
      </button>

      <button className="app-button" onClick={changeState4}>
        De Especias a Hortalizas
      </button>

      <Frutas frutaProp={fruits} tituloFrutaProp={fruitsTitle} />
      <Hortalizas hortalizaProp={hort} tituloHortalizaProp={hortTitle} />
      <Verduras verduraProp={vegetable} tituloVerduraProp={VegetableTitle} />
      <Especias especiaProp={spices} tituloEspeciaProp={spicesTitle} /> */}
    </div>
  );
}

export default App;
