import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Pokemon = ({ img }) => {
  const { toggleFavoritPokemon, user } = useContext(UserContext);

  const imgStyles = {
    height: "260px",
    objectFit: "cover",
  };

  const isFavorite = user?.favoritesPokemon?.includes(img.id);

  return (
    <div
      className={`card ${
        isFavorite ? "border-info" : " border-warning"
      } border-3 m-3`}
    >
      <img
        src={img.sprites.front_default}
        alt={img.name}
        className="card-img-top"
        styles={imgStyles}
      />
      <h4 className="text-center">{img.name}</h4>
      <h6 className="text-center">Type: {img.types[0].type.name}</h6>
      {user?.id && (
        <div className="card-body">
          <h6 className="text-center">Weight: {img.weight}</h6>
          <h6 className="text-center">Height: {img.height}</h6>
        </div>
      )}

      <div className="card-body">
        {user?.id && (
          <button
            className={`btn ${
              isFavorite ? "btn-success" : "btn-outline-primary"
            }`}
            onClick={() => toggleFavoritPokemon(img.id)}
          >
            Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
