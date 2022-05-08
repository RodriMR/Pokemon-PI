import React from "react";

const Paginas = ({ pokemonNum, pagina, pokemonsInPage }) => {
  const pages = Math.round(pokemonNum / pokemonsInPage);

  const numPages = [];
  for (let i = 0; i <= pages; i++) {
    numPages.push(i + 1);
  }
  return (
    <nav>
      <ul>
        {numPages?.map((number) => (
          <li key={number}>
            <button onClick={() => pagina(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginas;
