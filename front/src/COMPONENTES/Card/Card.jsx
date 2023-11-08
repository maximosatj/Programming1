// import React from 'react'
// import './Card.css'

// export default function Card  (props)  {
//   return (
//     <div>

//         <div className="card" style={{width: '18rem'}}>
//             <img className="card-img-top" src={require(`../IMAGENES/${props.imagen}`)} alt="..."
//             style={{height:'200px', width:'200px'}}/>
//              <div className="card-body">
//              <h5 className="card-title">{props.titulo}</h5>
//              <p className="card-text">{props.texto}</p>
//             <a href='https://www.youtube.com/' className="btn btn-primary">Ver Mas</a>
//   </div>
// </div>
// </div>
//   )
// }

import React from "react";
import "./Card.css";

const Card = ({ vino }) => {
  return (
    <div className="cardContainer">
      <img src={vino.imagen} alt={vino.id} />
      <div className="textContainer">
        <p className="priceText">{vino.titulo}</p>
        <p className="priceText">{vino.descripcion}</p>
        <p className="priceText">{vino.cualidades}</p>
      </div>
    </div>
  );
};

export default Card;
