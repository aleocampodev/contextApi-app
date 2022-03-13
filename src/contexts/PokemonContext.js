import React, { useState, useEffect, createContext } from "react";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [result, setResult] = React.useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [load, setLoad] = React.useState("true");

  const arr = [];

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
      .then((res) => res.json())
      .then((data) =>
        setResult(
          data.results.map((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => arr.push(allpokemon));
            setPokemon(arr);
          })
        )
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  setTimeout(() => {
    setLoad(false);
  }, 2000);

  const data = {
    pokemon: pokemon,
    load: load,
  };
  return (
    <PokemonContext.Provider value={data}>{children}</PokemonContext.Provider>
  );
};

export { PokemonProvider };
export default PokemonContext;
