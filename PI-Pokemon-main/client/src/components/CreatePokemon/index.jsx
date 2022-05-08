import axios from "axios";
import React, { useState } from "react";
import "./style.css";

function validate(data) {
  let errors = {};
  if (!data.name) {
    errors.name = "Pokemon needs a name";
  }
  return errors;
}
const CreatePokemon = () => {
  const [data, setData] = useState({
    name: "",
    slot1: "",
    slot2: "",
    hp: 0,
    str: 0,
    def: 0,
    spd: 0,
    height: 0,
    weight: 0,
    img: "",
  });

  const [errors, setErrors] = useState(false);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...data,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, hp, str, def, spd, height, weight, img, slot1, slot2 } = data;
    console.log({
      name,
      hp,
      str,
      def,
      spd,
      height,
      weight,
      img,
      slot1,
      slot2,
    });
    try {
      await axios.post("http://localhost:3001/pokemons", {
        name,
        hp: parseInt(hp),
        str: parseInt(str),
        def: parseInt(def),
        spd: parseInt(spd),
        height: parseInt(height),
        weight: parseInt(weight),
        img,
        slot1,
        slot2,
      });

      alert(`Pokemon ${name} created succesfully`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mostrate">
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p>{errors.name}</p>}
        </label>
        <br />
        <label>
          Type 1
          <input
            required
            type="text"
            name="slot1"
            value={data.slot1}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Type 2
          <input
            type="text"
            name="slot2"
            value={data.slot2}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Hp
          <input
            required
            type="number"
            name="hp"
            value={data.hp}
            onChange={handleChange}
            max={100}
            min={1}
          />
        </label>
        <br />
        <label>
          Str
          <input
            required
            type="number"
            name="str"
            value={data.str}
            onChange={handleChange}
            maxLength={3}
            max={100}
            min={1}
          />
        </label>
        <br />
        <label>
          Def
          <input
            required
            type="number"
            name="def"
            value={data.def}
            onChange={handleChange}
            maxLength={3}
            max={100}
            min={1}
          />
        </label>
        <br />
        <label>
          Spd
          <input
            required
            type="number"
            name="spd"
            value={data.spd}
            onChange={handleChange}
            maxLength={3}
            max={100}
            min={1}
          />
        </label>
        <br />
        <label>
          Height
          <input
            required
            type="number"
            name="height"
            value={data.height}
            onChange={handleChange}
            maxLength={5}
            max={10000}
            min={1}
          />
        </label>
        <br />
        <label>
          Weight
          <input
            required
            type="number"
            name="weight"
            value={data.weight}
            onChange={handleChange}
            maxLength={5}
            max={10000}
            min={1}
          />
        </label>
        <br />
        <label>
          Img
          <input
            required
            type="url"
            name="img"
            value={data.img}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Hatch! </button>
      </form>
    </div>
  );
};

export default CreatePokemon;
