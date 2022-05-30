import React from "react";
import { Link } from 'react-router-dom';
import queryString from 'query-string'


function Card (props) {
  if (props.value) {
    console.log(props.value);

    return (
        <div className="pokeCard">
          <h2>{`#${props.value.id} `} <Link to={`pokemon/${props.value.id}`}>{props.value.name.toUpperCase()}</Link></h2>
          <img src={props.value.sprites.front_default} alt="Foto Pokemon" />{/*className="pokeFoto"/> */}
          <h4>{`Type 1: ${props.value.types[0].type.name}`}</h4>
          {props.value.types[1]? <h4>{`Type 2: ${props.value.types[1].type.name}`}</h4> : ""}
          <h5>{`Pisua: ${(props.value.weight)/10}Kg.`}</h5>
          <h5>{`Altuera: ${(props.value.height)/10}m.`}</h5>
        </div>
    )
  }
}

export default Card;
//<h2>{`#${props.value.id} ` <Link to={`pokemon/${id}`}>{props.value.name.toUpperCase()}</Link>${props.value.name.toUpperCase()}`}</h2>