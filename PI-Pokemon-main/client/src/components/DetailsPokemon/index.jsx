import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DetailsPokemon({
  name,
  img,
  type1,
  type2,
  idApi,
  hp,
  str,
  def,
  spd,
  height,
  weight,
}) {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  // const [state, dispatch] = useStore();
  const [captured, setCaptured] = useState(false);
  const fetchPokemon = async () => {
    const fetchedPokemon = await axios.get(
      `http://localhost:3001/pokemons/${id}`
    );
    setPokemon(fetchedPokemon.data[0]);
  };

  const idCapture = { id: id };

  // useEffect(() => {
  //   handleClick();
  // }, []);

  const handleClick = async () => {
    try {
      const capture = captured;
      setCaptured(!capture);
      const res = await axios.put(`http://localhost:3001/pokemons/capture`, {
        idCapture,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pokemonDetails">
      <p>
        {idApi}-{name}
      </p>
      <img className="sprite" src={img} alt={`Pokemon ${name}`} />
      <p>
        {type1} {`${type2 ? ` - ${type2}` : ""}`}
      </p>
      <ul>
        <li> HP:{hp} </li>
        <progress value={hp} max="255" className="statHp">{`${hp}`}</progress>
        <li> STR:{str} </li>
        <progress value={str} max="255" className="statStr"></progress>
        <li> DEF:{def} </li>
        <progress value={def} max="255" className="statDef"></progress>
        <li> SPD:{spd} </li>
        <progress value={spd} max="255" className="statSpd"></progress>
        <li> HEIGHT:{height}" </li>
        <br />
        <li> WEIGHT:{weight}lbs </li>
      </ul>
      {/* <button onClick={() => handleClick()} className="capturar">{`${
        state.team.name ? "Release" : "Capture"
      }`}</button> */}
      <button onClick={handleClick} className="capturar">{`${
        captured ? "Release" : "Capture"
      }`}</button>
    </div>
  );
}
