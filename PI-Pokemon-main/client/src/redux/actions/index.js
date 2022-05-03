import axios from "axios";
import {
  ADD_TO_SQUAD,
  DEL_FROM_SQUAD,
  GET_POKEMON_DETAIL,
  LOAD_DATA_BASE,
} from "./actionTypes";

export function getPokemons() {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/")
      .then((res) =>
        dispatch({ type: LOAD_DATA_BASE, payload: res.data.results })
      );
  };
}
export function getPokemonDetail(id) {
  return (dispatch) => {
    return axios
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

export function delFromTeam(payload){
  return {
    type:DEL_FROM_SQUAD,
    payload,
  }
}
