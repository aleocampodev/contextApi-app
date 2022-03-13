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
            return (
              <div className="col-md-4 " key={img.id}>
                <Pokemon img={img} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PokemonList;
