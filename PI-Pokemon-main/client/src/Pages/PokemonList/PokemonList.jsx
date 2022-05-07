import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Pokemon";
import "./style.css";
import SearchBar from "../../components/SearchBar";
// import { useStore } from "../../context/store";
// import { getPokemons } from "../../redux/actions";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  // const [selectedPoke, setSelectedPoke] = useState({});

  // const [state, dispatch] = useStore();
  const fetchPokemons = async () => {
    const fetchedPokemons = await axios.get("http://localhost:3001/pokemons");
    setPokemons(fetchedPokemons.data);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="container">
      <div>
        
        <SearchBar setPokemons={setPokemons} />
      </div>

      <div className="cards">
        {pokemons && pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
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
