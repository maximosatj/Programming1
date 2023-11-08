import React from "react";
import "./PaginaConFondo.css";
import BoxImg from "./box_img.png"; // Importa la imagen correctamente

function PaginaConFondo() {
  return (
    <div className="fondo-personalizado">
      <img src={BoxImg} alt="Imagen" />{" "}
      {/* Utiliza la variable BoxImg para el atributo src */}
      <h2>
        En barricas de roble duerme el tesoro, el vino añejo, sublime y
        seductor. Cada sorbo revela historias guardadas, en cada botella hay
        magia desatada.
      </h2>
    </div>
  );
}

export default PaginaConFondo;
