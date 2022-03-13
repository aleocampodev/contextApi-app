import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const PokemonList = () => {
  const [result, setResult] = React.useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [load, setLoad] = React.useState("true");

  const arr = [];

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
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
  }, 1000);

  console.log(pokemon, "hola pokemon");
  return (
    <div className="container">
      <div className="row">
        {load ? (
          <p>loading...</p>
        ) : (
          pokemon.map((img, i) => {
            console.log(img, "hola imagen", img.sprites.front_default);
            return <Pokemon img={img} key={img.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default PokemonList;
