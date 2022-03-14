import React, { useContext } from "react";
import PokemonContext from "../contexts/PokemonContext";
import UserContext from "../contexts/UserContext";
import Pokemon from "./Pokemon";

const PokemonList = () => {
  const { pokemon, load } = useContext(PokemonContext);
  const { user } = useContext(UserContext);

  return (
    <div className="container">
      {user?.id && (
        <h2 className="text-center m-4">{`You have ${user.favoritesPokemon.length} pokemon favorites`}</h2>
      )}

      {!user && (
        <h2 className="text-center m-4">Log In and choose Pokemon Favorites</h2>
      )}

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
