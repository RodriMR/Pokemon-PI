import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index.jsx";
import PokemonList from "./Pages/PokemonList/PokemonList";
import NavBar from "./components/NavBar/index.jsx";
import DetailList from "./Pages/PokemonDetails/PokemonDetails";
import CreatePokemon from "./components/CreatePokemon";
import Team from "./components/Team";

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
          <Route path="/pokemons" exact>
            <NavBar />
            <PokemonList />
          </Route>
          <Route path={"/create"} exact>
            <NavBar />
            <CreatePokemon />
          </Route>
          <Route path={"/team"}>
            <NavBar />
            <Team />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
