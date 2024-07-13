import React, { useState } from "react";
import "./Form3.css";
export default function Form3() {
  const [dataContacto, setDataContacto] = useState({
    nombre: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataContacto({
      ...dataContacto,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            // value={}
            onChange={handleChange}
            placeholder="Escribi tu nombre"
            required
          ></input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            // value={}
            onChange={handleChange}
            placeholder="escribi tu email"
            required
          ></input>
        </div>
      </form>
      <div className="output">
        <p>Email: {dataContacto.nombre}</p>
        <p>Teléfono: {dataContacto.email}</p>
      </div>
    </div>
  );
}
