import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Pokemon";

import "./style.css";
export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    const fetchedPokemons = await axios.get("http://localhost:3001/pokemons");
    setPokemons(fetchedPokemons.data);
  };
  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <div className="container">
      <div className="cards">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.idApi}
          name={pokemon.name}
          img={pokemon.img}
          type1={pokemon.slot1}
          type2={pokemon.slot2}
          id={pokemon.idApi}
        />
      ))}
      </div>
    </div>
  );
}
