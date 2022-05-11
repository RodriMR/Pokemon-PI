import axios from "axios";
import React, { useState } from "react";
import { useStore } from "../../context/store";
import { GET_POKEMONS } from "../../redux/actions/actionTypes";
import "./style.css";
export default function SearchBar({ setError }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const [state, dispatch] = useStore();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault(); //para evtiar que refresque la pagina
      var toLowerCase = input.toLowerCase(); //asi no me lo buscan con mayusc
      const res = await axios.get(
        `http://localhost:3001/pokemons?name=${toLowerCase}`
      );
      dispatch({
        type: GET_POKEMONS,
        payload: res.data,
      });
      setInput("");
      setError(false);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Pokename..."
          className="inputSearch"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button className="searchBtn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
