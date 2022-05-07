import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons } from "../../redux/actions";
import "./style.css";
export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const loadDb = async () => {
    const fetchedPokemons = await getPokemons();
    setPokemons(fetchedPokemons.data);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemons();
  }, [dispatch]);
  return (
    <div className="body">
      <Link style={{ textDecoration: "none", color: "black" }} to={"/pokemons"}>
        <div className="center-on-page">
          <div className="pokeball">
            <div className="pokeball__button"></div>
          </div>
        </div>
      </Link>
      {/* <button className="enterPokedex">
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/pokemons"}
        >
          Enter pokedex
        </Link>
      </button> */}
    </div>
  );
}
