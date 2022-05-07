import "./App.css";
import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index.jsx";
import PokemonList from "./Pages/PokemonList/PokemonList";
import NavBar from "./components/NavBar/index.jsx";

import DetailList from "./Pages/PokemonDetails/PokemonDetails";

import CreatePokemon from "./components/CreatePokemon";
import Types from "./Pages/DisplayTypes/index.jsx";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/pokemons/:id" exact>
            <NavBar />
            <DetailList />
          </Route>
          <Route path="/types">
            <NavBar />
            {/* <Types /> */}
          </Route>
          <Route path="/pokemons" exact>
            <NavBar />
            <PokemonList />
          </Route>
          <Route path={"/create"} exact>
            <NavBar />
            <CreatePokemon />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
