import {
  ADD_TO_SQUAD,
  DEL_FROM_SQUAD,
  GET_POKEMON_DETAIL,
  LOAD_DATA_BASE,
} from "../actions/actionTypes";

const initialState = {
  pokemons: [],
  types: [],
  team: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_DATA_BASE: {
      return {
        ...state,
        pokemons: payload,
      };
    }
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokeDetails: payload,
      };
    case ADD_TO_SQUAD:
      return {
        ...state,
        team: state.team.find((pokemon) => pokemon.id === payload.id)
          ? [...state.team]
          : [...state.team, payload],
      };
    case DEL_FROM_SQUAD:
      return {
        ...state,
        team: state.team.filter((pokemon) => pokemon.id !== payload.id),
      };
    default:
      return state;
  }
}

export default reducer;
