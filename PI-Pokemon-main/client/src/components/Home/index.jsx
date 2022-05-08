import React from "react";

import { Link } from "react-router-dom";

import "./style.css";
export default function Home() {
  return (
    <div className="body">
      <Link style={{ textDecoration: "none", color: "black" }} to={"/pokemons"}>
        <div className="center-on-page">
          <div className="pokeball">
            <div className="pokeball__button"></div>
          </div>
        </div>
      </Link>
    </div>
  );
}
