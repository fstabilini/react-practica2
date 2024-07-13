import React, { useState } from "react";
import "./Form4.css";

export default function Form4() {
  const [infoData, setInfoData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoData({
      ...infoData,
      [name]: value,
    });
  };

  return (
    <div>
      <form>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Ingresa tu email"
            required
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="ingresa tu contraseña"
            required
          ></input>
        </div>
      </form>
      <div className="output">
        <p>Email:{infoData.email}</p>
        <p>Password:{infoData.password}</p>
      </div>
    </div>
  );
}
