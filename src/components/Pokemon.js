import React from "react";

const Pokemon = ({ img }) => {
  const imgStyles = {
    height: "260px",
    objectFit: "cover",
  };

  const isFavorite = true;

  return (
    <div className="card">
      <img
        src={img.sprites.front_default}
        className="card-img-top"
        styles={imgStyles}
      />
      <div className="card-body">
        <button
          className={`btn ${isFavorite ? "btn-sucess" : "btn-outline-primary"}`}
        >
          Favoritos
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
