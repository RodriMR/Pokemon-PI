import axios from "axios";
import React, { useState, useEffect } from "react";
import { getTypes } from "../../redux/actions";
import { useStore } from "../../context/store";
import "./style.css";

function validate(data) {
  let errors = {};
  if (!data.name) {
    errors.name = "Pokemon needs a name";
  }
  if (!data.slot1) {
    errors.slot1 = "Select a type pls";
  }
  if (!data.hp) {
    errors.hp = "Select hp for your poke";
  }
  if (!data.str) {
    errors.str = "Select str for your poke";
  }
  if (!data.def) {
    errors.def = "Select def for your poke";
  }
  if (!data.spd) {
    errors.spd = "Select spd for your poke";
  }
  if (!data.height) {
    errors.height = "Select height for your poke";
  }
  if (!data.weight) {
    errors.weight = "Select weight for your poke";
  }
  if (!data.img) {
    errors.img = "Use an image url pls";
  }
  return errors;
}
const CreatePokemon = () => {
  const [data, setData] = useState({
    name: "",
    slot1: "",
    slot2: "",
    hp: "",
    str: "",
    def: "",
    spd: "",
    height: "",
    weight: "",
    img: "",
  });
  const [errors, setErrors] = useState(false);
  const [state, dispatch] = useStore();
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
      setData({
        name: "",
        slot1: "",
        slot2: "",
        hp: "",
        str: "",
        def: "",
        spd: "",
        height: "",
        weight: "",
        img: "",
      });
    } catch (err) {
      alert(err.response.data.error);
    }
  };
  useEffect(() => {
    getTypes(dispatch);
  }, []);
  return (
    <div className="containerForm">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="columnContainer">
          <div className="column">
            <div className="inputContainer">
              <label>Name</label>
              <br />
              <input
                className="input"
                placeholder="Poke name"
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <br />
            <div className="inputContainer">
              <label>Type 1</label>
              <br />
              <select
                className="input"
                required
                name="slot1"
                value={data.slot1}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {state.types?.map((type) => (
                  <option value={type.name} key={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>

              {errors.slot1 && <p className="error">{errors.slot1}</p>}
            </div>
            <br />
            <div className="inputContainer">
              <label>Type 2</label>
              <br />
              <select
                className="input"
                name="slot2"
                value={data.slot2}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {state.types?.map((type) => (
                  <option value={type.name} key={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <div className="inputContainer">
              <label>Hp</label>
              <br />
              <input
                className="input"
                placeholder="Hp value"
                required
                type="number"
                name="hp"
                value={data.hp}
                onChange={handleChange}
                max={200}
                min={1}
              />
              {errors.hp && <p className="error">{errors.hp}</p>}
            </div>
            <br />
            <div className="inputContainer">
              <label>Str</label>
              <br />
              <input
                className="input"
                placeholder="Str value"
                required
                type="number"
                name="str"
                value={data.str}
                onChange={handleChange}
                maxLength={3}
                max={200}
                min={1}
              />
              {errors.str && <p className="error">{errors.str}</p>}
            </div>
          </div>
          <div className="column">
            <div className="inputContainer">
              <label>Def</label>
              <br />
              <input
                className="input"
                placeholder="Def value"
                required
                type="number"
                name="def"
                value={data.def}
                onChange={handleChange}
                maxLength={3}
                max={200}
                min={1}
              />
              {errors.def && <p className="error">{errors.def}</p>}
            </div>
            <br />
            <div className="inputContainer">
              <label>Spd</label>
              <br />
              <input
                className="input"
                placeholder="Spd value"
                required
                type="number"
                name="spd"
                value={data.spd}
                onChange={handleChange}
                maxLength={3}
                max={200}
                min={1}
              />
              {errors.spd && <p className="error">{errors.spd}</p>}
            </div>
            <br />
            <div className="inputContainer">
              <label>Height</label>

              <br />
              <input
                className="input"
                placeholder="Height value"
                required
                type="number"
                name="height"
                value={data.height}
                onChange={handleChange}
                maxLength={5}
                max={10000}
                min={1}
              />
              {errors.height && <p className="error">{errors.height}</p>}
            </div>
            <br />
            <div className="inputContainer">
              <label>Weight</label>
              <br />
              <input
                className="input"
                placeholder="Weight value"
                required
                type="number"
                name="weight"
                value={data.weight}
                onChange={handleChange}
                maxLength={5}
                max={10000}
                min={1}
              />
              {errors.weight && <p className="error">{errors.weight}</p>}
            </div>
            <br />
            <div className="inputContainer">
              <label>Img</label>
              <br />
              <input
                className="input"
                placeholder="https://"
                required
                type="url"
                name="img"
                value={data.img}
                onChange={handleChange}
              />
              {errors.img && <p className="error">{errors.img}</p>}
            </div>
          </div>
          <br />
        </div>
        <button className="hatch" type="submit">
          Hatch!
        </button>
      </form>
      {console.log(errors)}
    </div>
  );
};

export default CreatePokemon;
