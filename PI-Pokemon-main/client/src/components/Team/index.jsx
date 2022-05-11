import React from "react";
import  Card  from "../Card/index";
import { useStore } from "../../context/store";
export default function Team() {
  const [state] = useStore();

  
  const captured = state.team

  return (
    <div>
      {captured?.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            img={pokemon.img}
            type1={pokemon.slot1}
            type2={pokemon.slot2}
            id={pokemon.idApi}
          />
        );
      })}
    </div>
  );
}
