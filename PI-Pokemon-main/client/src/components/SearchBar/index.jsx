import axios from "axios";
import React, { useState } from "react";
import { useStore } from "../../context/store";
import { GET_POKEMONS } from "../../redux/actions/actionTypes";
export default function SearchBar({ setError }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const [, dispatch] = useStore();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault(); //para evtiar que refresque la pagina
      const res = await axios.get(
        `http://localhost:3001/pokemons?name=${input}`
      );
      dispatch({
        type: GET_POKEMONS,
        payload: res.data,
      });
      setError(false);
    } catch (err) {
      setError(true);
    }
    // setSelectedPoke([res])//manda el json al componente padre para setear el estado
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
