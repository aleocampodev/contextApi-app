import React, { useContext } from "react";
import PokemonContext from "../contexts/PokemonContext";
import Pokemon from "./Pokemon";

const PokemonList = () => {
  const { pokemon, load } = useContext(PokemonContext);

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
