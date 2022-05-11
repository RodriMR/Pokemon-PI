import {
  ADD_TO_SQUAD,
  DEL_FROM_SQUAD,
  GET_POKEMONS,
  LOAD_TYPES,
  FILTER_POKEMON,
  MANTAIN_FILTER,
} from "../actions/actionTypes";

export const initialState = {
  pokemons: [],
  types: [],
  team: [],
  filterPokemons: [],
  mantainFilter: [],
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
    case MANTAIN_FILTER: {
      return {
        ...state,
        mantainFilter: action.payload,
      };
    }
    case FILTER_POKEMON: {
      return {
        ...state,
        filterPokemons: action.payload,
      };
    }
    case ADD_TO_SQUAD:
      return {
        ...state,
        team: action.payload,
      };
    case DEL_FROM_SQUAD:
      return {
        ...state,
        team: state.team.filter(
          (pokemon) => pokemon.name !== action.payload.name
        ),
      };

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
