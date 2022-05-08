import axios from "axios";

import {
  ADD_TO_SQUAD,
  DEL_FROM_SQUAD,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  LOAD_TYPES,
  // FILTER_POKEMON
} from "./actionTypes";

export const fetchPokemons = async (dispatch) => {
  const fetchedPokemons = await axios.get("http://localhost:3001/pokemons");
  dispatch({
    type: GET_POKEMONS,
    payload: fetchedPokemons.data,
  });
};

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

export function delFromTeam(payload) {
  return {
    type: DEL_FROM_SQUAD,
    payload,
  };
}
export const getTypes = async (dispatch) => {
  const types = await axios.get("http://localhost:3001/types");
  dispatch({
    type: LOAD_TYPES,
    payload: types.data,
  });
};
