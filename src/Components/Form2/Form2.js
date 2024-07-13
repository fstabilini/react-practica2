import React, { useState } from "react";
import "./Form2.css";

export default function Form2() {
  const [contactData, setContactData] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };
  return (
    <div>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            // value={}
            onChange={handleChange}
            placeholder="Ingresa tu correo electrónico"
            required
          ></input>
        </div>
        <div>
          <label>Telefóno:</label>
          <input
            type="tel"
            name="phone"
            // value={}
            onChange={handleChange}
            required
            placeholder="Ingresa tu número de teléfono"
          ></input>
        </div>
      </form>
      <div className="output">
        <p>Email: {contactData.email}</p>
        <p>Teléfono: {contactData.phone}</p>
      </div>
    </div>
  );
}
