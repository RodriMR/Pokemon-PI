import React from "react";
import "./style.css";
import {Link} from "react-router-dom"
export default function Card({ name, img, type1, type2, id}) {
  return (
    <>
      <div className="card">
        <Link className="text-link" to={`/pokemons/${id}`}>
        <h1 className="EarlyGameBoy">{name.toUpperCase()}</h1>
        <img className="sprite"src={img} alt={`Pokemon ${name}`} />
        <h2 className="EarlyGameBoy">
          {type1}-{type2}
        </h2>
        </Link>
      </div>
    </>
  );
}
