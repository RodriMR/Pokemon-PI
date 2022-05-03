import { useState, useEffect } from "react";
import axios from "axios";

import "./style.css";
import { useParams } from "react-router-dom";
import DetailsPokemon from "../../components/DetailsPokemon/index.jsx";
export default function DetailList() {
  let { id } = useParams();
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    const fetchedPokemons = await axios.get(
      `http://localhost:3001/pokemons/${id}`
    );
    setPokemons(fetchedPokemons.data);
  };
  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <div>
      {pokemons.map((pokemon) => (
        <DetailsPokemon
          key={pokemon.idApi}
          name={pokemon.name}
          img={pokemon.img}
          type1={pokemon.slot1}
          type2={pokemon.slot2}
          id={pokemon.idApi}
          hp={pokemon.hp}
          str={pokemon.str}
          def={pokemon.def}
          spd={pokemon.spd}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      ))}
    </div>
  );
}
