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
      <p>{id}-{name}</p>
      <img className="sprite" src={img} alt={`Pokemon ${name}`} />
      <p>
        {type1}-{type2}
      </p>
      <ul>
        <li> HP:{hp} </li>
        <progress value={hp} max="200" className="statHp">{`${hp}`}</progress>
        <li> STR:{str} </li>
        <progress value={str} max="200" className="statStr"></progress>
        <li> DEF:{def} </li>
        <progress value={def} max="200" className="statDef"></progress>
        <li> SPD:{spd} </li>
        <progress value={spd} max="200" className="statSpd"></progress>
        <li> HEIGHT:{height} </li>

        <li> WEIGHT:{weight} </li>
      </ul>
    </div>
  );
}
