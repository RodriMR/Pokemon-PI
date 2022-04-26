const initialState = {
  pokemons: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_POKEMONS": {
      return {
        ...state,
        pokemons: payload.data,
      };
    }
    default:
      return state;
  }
}

export default reducer;
