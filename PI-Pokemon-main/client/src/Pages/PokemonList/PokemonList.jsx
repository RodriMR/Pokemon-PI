import { useState, useEffect } from "react";
import Card from "../../components/Card";
import "./style.css";
import SearchBar from "../../components/SearchBar";
import { useStore } from "../../context/store";
import { fetchPokemons, getTypes } from "../../redux/actions/index";
import Paginas from "../../components/Paginas";
import { FILTER_POKEMON, GET_POKEMONS } from "../../redux/actions/actionTypes";

export default function PokemonList() {
  const [error, setError] = useState(false);
  const [state, dispatch] = useStore();
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [atribute, setAtribute] = useState("");
  const [origin, setOrigin] = useState("all");
  const [order, setOrder] = useState("ASC");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsInPage] = useState(12);
  const indexLastPokemon = currentPage * pokemonsInPage;
  const indexFirstPokemon = indexLastPokemon - pokemonsInPage;
  const currentPokemons = state.filterPokemons.slice(
    indexFirstPokemon,
    indexLastPokemon
  );
  const pagina = (numPage) => {
    setCurrentPage(numPage);
  };

  const handleFilter = () => {
    let filterPokemons = [];
    //Filtro por types y TODES//
    if (type1 && type2 === "" && origin === "all") {
      filterPokemons = state.pokemons.filter(
        (pokemon) => pokemon.slot1 === type1
      );
    }
    if (type1 === "" && type2 !== "" && origin === "all") {
      filterPokemons = state.pokemons.filter(
        (pokemon) => pokemon.slot2 === type2
      );
    }
    if (type1 && type2 !== "" && origin === "all") {
      filterPokemons = state.pokemons.filter(
        (pokemon) => pokemon.slot1 === type1 && pokemon.slot2 === type2
      );
    }
    if (type1 === "" && type2 === "" && origin === "all") {
      filterPokemons = [...state.pokemons];
    }
    //Filtro por NO DB//
    if (type1 && type2 === "" && origin === "world") {
      filterPokemons = state.pokemons.filter(
        (pokemon) => pokemon.slot1 === type1 && pokemon.createdInDb === false
      );
    }
    if (type1 === "" && type2 !== "" && origin === "world") {
      filterPokemons = state.pokemons.filter(
        (pokemon) => pokemon.slot2 === type2 && pokemon.createdInDb === false
      );
    }
    if (type1 && type2 !== "" && origin === "world") {
      filterPokemons = state.pokemons.filter(
        (pokemon) =>
          pokemon.slot1 === type1 &&
          pokemon.slot2 === type2 &&
          pokemon.createdInDb === false
      );
    }
    if (type1 === "" && type2 === "" && origin === "world") {
      filterPokemons = state.pokemons.filter(
        (pokemon) => pokemon.createdInDb === false
      );
    }

    //Filtro por DB//
    if (type1 && type2 === "" && origin === "hatched") {
      filterPokemons = state.pokemons.filter(
        (pokemon) => pokemon.slot1 === type1 && pokemon.createdInDb === true
      );
    }
    if (type1 === "" && type2 !== "" && origin === "hatched") {
      filterPokemons = state.pokemons.filter(
        (pokemon) => pokemon.slot2 === type2 && pokemon.createdInDb === true
      );
    }
    if (type1 && type2 !== "" && origin === "hatched") {
      filterPokemons = state.pokemons.filter(
        (pokemon) =>
          pokemon.slot1 === type1 &&
          pokemon.slot2 === type2 &&
          pokemon.createdInDb === true
      );
    }
    if (type1 === "" && type2 === "" && origin === "hatched") {
      filterPokemons = state.pokemons.filter(
        (pokemon) => pokemon.createdInDb === true
      );
    }

    return dispatch({
      type: FILTER_POKEMON,
      payload: filterPokemons,
    });
  };

  const handleOrder = () => {
    function compare(a, b) {
      if (a[atribute] < b[atribute]) {
        return -1;
      }
      if (a[atribute] > b[atribute]) {
        return 1;
      }
      return 0;
    }
    let orderAllPokemons = [];
    let orderPokemons = [];
    if (atribute) {
      if (order === "DESC") {
        orderPokemons = state.filterPokemons.reverse(compare);
        orderAllPokemons = state.pokemons.reverse(compare);
      } else {
        orderPokemons = state.filterPokemons.sort(compare);
        orderAllPokemons = state.pokemons.sort(compare);
      }
      dispatch({
        type: FILTER_POKEMON,
        payload: orderPokemons,
      });
      dispatch({
        type: GET_POKEMONS,
        payload: orderAllPokemons,
      });
    }
  };
  useEffect(() => {
    fetchPokemons(dispatch);
    getTypes(dispatch);
  }, []);

  useEffect(() => {
    handleFilter();
  }, [type1, type2, state.pokemons, origin]);
  useEffect(() => {
    handleOrder();
  }, [atribute, order]);

  return (
    <div className="container">
     
      <div>
        <div className="buscadores">
          <div className="findSection">
            {/* Boton de reinicio que no solo setea los estados locales(filtro) sino que me reinicia el store de pokemones */}
            <button
              className="resetBtn"
              onClick={() => {
                fetchPokemons(dispatch);
                setError(false);
                setType1("");
                setType2("");
                setAtribute("");
                setOrigin("all");
                setOrder("ASC");
              }}
            >
              Reset
            </button>
            <SearchBar setError={setError} />
          </div>
          <div className="selectGroup">
            <div className="selectContainer">
              <label className="labels">Type:1</label>
              <select
                className="select"
                value={type1}
                onChange={(e) => setType1(e.target.value)}
              >
                <option value="">All</option>
                {state.types?.map((type) => (
                  <option value={type.name} key={type.id} id={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="selectContainer">
              <label className="labels">Type:2</label>
              <select
                className="select"
                value={type2}
                onChange={(e) => setType2(e.target.value)}
              >
                <option value="">All</option>
                {state.types?.map((type) => (
                  <option value={type.name} key={type.id} id={type.id}>
                    {type.name}
                  </option>
                ))}
                <option value={null}>empty</option>
              </select>
            </div>
            <div className="selectContainer">
              <label className="labels">Atribute:</label>
              <select
                className="select"
                value={atribute}
                onChange={(e) => setAtribute(e.target.value)}
              >
                <option value="">All</option>
                <option value="name">Name</option>
                <option value="hp">Hp</option>
                <option value="str">Str</option>
                <option value="def">Def</option>
                <option value="spd">Spd</option>
              </select>
            </div>
            <div className="selectContainer">
              <label className="labels">Order:</label>
              <select
                className="select"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
              >
                <option value="ASC">Asc</option>
                <option value="DESC">Desc</option>
              </select>
            </div>
            <div className="selectContainer">
              <label className="labels">From:</label>
              <select
                className="select"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              >
                <option value="all">All</option>
                <option value="world">World</option>
                <option value="hatched">Hatched</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        {state.pokemons.length ? (
          currentPokemons?.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                name={pokemon.name}
                img={pokemon.img}
                type1={pokemon.slot1}
                type2={pokemon.slot2}
                id={pokemon.idApi}
              />
            );
          })
        ) : (
          <p className="notFound">Pokemon not found</p>
        )}
      </div>

      <div className="buscadores">
        <Paginas
          pokemonNum={state.filterPokemons.length}
          setCurrentPage={setCurrentPage}
          pagina={pagina}
          pokemonsInPage={pokemonsInPage}
        />
      </div>
    </div>
  );
}
