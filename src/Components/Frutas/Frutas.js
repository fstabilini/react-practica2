import React from "react";
import Card from "../Card/Card";

export default function Frutas({ frutaProp, tituloFrutaProp }) {
  return (
    <div>
      <h2 className="section-title">{tituloFrutaProp}</h2>
      {frutaProp.map((fruta) => (
        <Card>
          {" "}
          <p>
            {fruta.nombre} es de color {fruta.color}
          </p>
        </Card>
      ))}
    </div>
  );
}
