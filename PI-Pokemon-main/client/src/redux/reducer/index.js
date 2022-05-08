import {
  // ADD_TO_SQUAD,
  // DEL_FROM_SQUAD,
  GET_POKEMONS,
  LOAD_TYPES,
  FILTER_POKEMON,
} from "../actions/actionTypes";

export const initialState = {
  pokemons: [],
  types: [],
  team: [],
  filterPokemons: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS: {
      return {
        ...state,
        pokemons: action.payload,
      };
    }
    case LOAD_TYPES: {
      return {
        ...state,
        types: action.payload,
      };
    }

    case FILTER_POKEMON: {
      return {
        ...state,
        filterPokemons: action.payload,
      };
    }
    default:
      return state;
  }
}
export default reducer;

// case GET_POKEMON_DETAIL:
//   return {
//     ...state,
//     pokeDetails: action.payload,
//   };
// case ADD_TO_SQUAD:
//   return {
//     ...state,
//     team: state.team.find((pokemon) => pokemon.id === action.payload.id)
//       ? [...state.team]
//       : [...state.team, payload],
//   };
// case DEL_FROM_SQUAD:
//   return {
//     ...state,
//     team: state.team.filter((pokemon) => pokemon.id !== payload.id),
//   };
