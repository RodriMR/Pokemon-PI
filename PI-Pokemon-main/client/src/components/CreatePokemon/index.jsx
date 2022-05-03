import React, { useState } from "react";
import "./style.css";
export default function CreatePokemon() {
  const [data, setData] = useState({
    name: "",
    slot1: 0,
    slot2: 0,
    hp: 0,
    str: 0,
    def: 0,
    spd: 0,
    height: 0,
    weight: 0,
    img: "",
  });
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.tagret.value,
    });
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    alert(
      `${data.name},${data.slot1},${data.slot2},${data.hp},${data.str},${data.def},${data.spd},${data.height},${data.weight},${data.img}`
    );
  }
  return (
    <div className="mostrate">
      <form onSubmit={handleOnSubmit}>
        <label>
          {" "}
          Name
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Type 1
          <input type="text" name="slot1" onChange={handleChange} />
        </label>
        <br />
        <label>
          Type 2
          <input type="text" name="slot2" onChange={handleChange} />
        </label>
        <br />
        <label>
          Hp
          <input type="number" name="hp" onChange={handleChange} />
        </label>
        <br />
        <label>
          Str
          <input type="number" name="str" onChange={handleChange} />
        </label>
        <br />
        <label>
          Def
          <input type="number" name="def" onChange={handleChange} />
        </label>
        <br />
        <label>
          Spd
          <input type="number" name="spd" onChange={handleChange} />
        </label>
        <br />
        <label>
          Height
          <input type="number" name="height" onChange={handleChange} />
        </label>
        <br />
        <label>
          Weight
          <input type="number" name="weight" onChange={handleChange} />
        </label>
        <br />
        <label>
          Img
          <input type="url" name="img" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Hatch! </button>
      </form>
    </div>
  );
}
