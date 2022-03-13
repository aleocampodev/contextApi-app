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
    <div className="card">
      <img
        src={img.sprites.front_default}
        alt={img.name}
        className="card-img-top"
        styles={imgStyles}
      />
      <h4>{img.name}</h4>
      <div className="card-body">
        {user?.id && (
          <button
            className={`btn ${
              isFavorite ? "btn-success" : "btn-outline-primary"
            }`}
            onClick={() => toggleFavoritPokemon(img.id)}
          >
            Favoritos
          </button>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
