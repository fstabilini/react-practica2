import React from "react";
import Card from "../Card/Card";

export default function Hortalizas({ hortalizaProp, tituloHortalizaProp }) {
  return (
    <div>
      <h2 className="section-title">{tituloHortalizaProp}</h2>
      {hortalizaProp.map((hortaliza) => (
        <Card>
          {" "}
          <p>
            {hortaliza.nombre} es de color {hortaliza.color}
          </p>
        </Card>
      ))}
    </div>
  );
}
