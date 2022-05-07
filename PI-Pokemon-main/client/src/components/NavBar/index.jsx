import React from "react";
import { Link } from "react-router-dom";
import style from "./style.css";
export default function NavBar() {
  return (
    <div>
      <header className="navBar">
        <Link to={"/pokemons"}>
          <img
            className="logo"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/87044f58-c765-43c5-bc51-8613e3ac7ab1/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png"
            alt=""
          />
        </Link>

        <Link className="text-link" to="/">
          Exit pokedex{" "}
        </Link>

        <Link className="text-link" to="/create">
          Hatch new pokemon
        </Link>
        <Link className="text-link" to="/types">
          Types
        </Link>

        <Link className="text-link" to="/pokemons/team">
          My team
        </Link>
      </header>
    </div>
  );
}
