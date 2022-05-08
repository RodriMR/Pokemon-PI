import React from "react";

const TypeCard = ({ name, id, setTypes }) => {
  return (
    <div>
      <p>
        <button onClick={() => setTypes(name)}>{name}</button>
      </p>
    </div>
  );
};

export default TypeCard;


