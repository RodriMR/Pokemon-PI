import React from "react";
import "./style.css";

export default function DetailsPokemon({
  name,
  img,
  type1,
  type2,
  id,
  hp,
  str,
  def,
  spd,
  height,
  weight,
}) {
  return (
    <div className="pokemonDetails">
      <p>{name}</p>
      <img className="sprite" src={img} alt={`Pokemon ${name}`} />
      <p>
        {type1}
        {type2}
      </p>
      <ul>
        <li> HP:{hp} </li>
        <li> STR:{str} </li>
        <li> DEF:{def} </li>
        <li> SPD:{spd} </li>
        <li> HEIGHT:{height} </li>
        <li> WEIGHT:{weight} </li>
      </ul>
    </div>
  );
}
