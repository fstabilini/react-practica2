import React from "react";
import Card from "../Card/Card";

export default function Especias({ especiaProp, tituloEspeciaProp }) {
  return (
    <div>
      <h2 className="section-title">{tituloEspeciaProp}</h2>
      {especiaProp.map((especia) => (
        <Card>
          <p>
            {especia.nombre} es de color {especia.color}
          </p>
        </Card>
      ))}
    </div>
  );
}
