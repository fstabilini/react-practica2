import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          //   value={formData.apellido}
          onChange={handleChange}
        />
      </form>
      <div>
        <p>Nombre: {formData.nombre}</p>
        <p>Apellido: {formData.apellido}</p>
      </div>
    </div>
  );
}
