import React from "react";
import Card from "../Card/Card";

export default function Verduras({ verduraProp, tituloVerduraProp }) {
  return (
    <div>
      <h2 className="section-title">{tituloVerduraProp}</h2>
      {verduraProp.map((verdura) => (
        <Card>
          {" "}
          <p>
            {verdura.nombre} es de color {verdura.color}
          </p>
        </Card>
      ))}
    </div>
  );
}
