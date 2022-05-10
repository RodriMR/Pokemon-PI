import React from "react";
import "./style.css";
const Paginas = ({ pokemonNum, pagina, pokemonsInPage }) => {
  const pages = Math.round(pokemonNum / pokemonsInPage);

  const numPages = [];
  for (let i = 0; i <= pages; i++) {
    numPages.push(i + 1);
  }
  return (
    <nav>
      {numPages?.map((number) => (
        <button
          className="btnPaginas"
          key={number}
          onClick={() => pagina(number)}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Paginas;
