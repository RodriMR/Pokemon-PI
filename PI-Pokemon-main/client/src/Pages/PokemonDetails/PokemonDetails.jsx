import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useParams } from "react-router-dom";
import DetailsPokemon from "../../components/DetailsPokemon/index.jsx";

export default function DetailList() {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const fetchPokemonById = async () => {
    const fetchedPokemons = await axios.get(
      `http://localhost:3001/pokemons/${id}`
    );
  
    setPokemon(fetchedPokemons.data[0]);
  };

  useEffect(() => {
    fetchPokemonById();
  }, []);
  return (
    <div className="details">
      <DetailsPokemon
        key={pokemon.id}
        name={pokemon.name}
        img={pokemon.img}
        type1={pokemon.slot1}
        type2={pokemon.slot2}
        idApi={pokemon.idApi}
        hp={pokemon.hp}
        str={pokemon.str}
        def={pokemon.def}
        spd={pokemon.spd}
        height={pokemon.height}
        weight={pokemon.weight}
        isCaptured={pokemon.isCaptured}
      />
    </div>
  );
}
