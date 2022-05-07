import axios from "axios";
import React, { useState } from "react";

export default function SearchBar({ setPokemons }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); //para evtiar que refresque la pagina
    const res = await axios.get(`http://localhost:3001/pokemons?name=${input}`);
    setPokemons(res.data);
    // setSelectedPoke([res])//manda el json al componente padre para setear el estado
  };

  return (
    <div>
      {console.log(input)}
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
