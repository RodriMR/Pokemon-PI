import axios from "axios";
import {
  ADD_TO_SQUAD,
  DEL_FROM_SQUAD,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  LOAD_TYPES,
} from "./actionTypes";

export async function getPokemons() {
  return (dispatch) => {
    return  axios
      .get("http://localhost:3001/pokemons")
      .then((res) =>
        dispatch({ type: GET_POKEMONS, payload: res.data.results })
      );
  };
}
export  function getPokemonDetail(id) {
  return (dispatch) => {
    return  axios
      .get(`http://localhost:3001/pokemons/${id}`)
      .then((res) =>
        dispatch({ type: GET_POKEMON_DETAIL, payload: res.data.results })
      );
  };
}
export function addToTeam(payload) {
  return {
    type: ADD_TO_SQUAD,
    payload,
  };
}

export function delFromTeam(payload) {
  return {
    type: DEL_FROM_SQUAD,
    payload,
  };
}
export  function  getTypes() {
  return async(dispatch) => {
    return await axios.get("http://localhost:3001/types")
    .then((res) => {
      dispatch({ type: LOAD_TYPES, payload: res.data.results });
    });
  };
}
