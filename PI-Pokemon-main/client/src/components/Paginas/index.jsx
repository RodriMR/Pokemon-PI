import React from "react";

const Paginas = ({ pokemonNum, pagina, pokemonsInPage }) => {
  const pages = Math.round(pokemonNum / pokemonsInPage);

  const numPages = [];
  for (let i = 0; i <= pages; i++) {
    numPages.push(i + 1);
  }
  return (
    <nav>
      {numPages?.map((number) => (
        <button key={number} onClick={() => pagina(number)}>
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Paginas;
