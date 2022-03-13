import React, { createContext, useState } from "react";

const UserContext = createContext();

const initialUser = {
  id: 1,
  name: "Alejandra",
  favoritesPokemon: [1, 2, 3],
};
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavoritPokemon = (pokemonId) => {
    const isFavorite = user.favoritesPokemon.includes(pokemonId);
    const favoritesPokemon = isFavorite
      ? /*Delete*/ user.favoritesPokemon.filter((id) => id !== pokemonId)
      : [...user.favoritesPokemon, pokemonId]; /* agregarla*/
    setUser({
      ...user,
      favoritesPokemon: favoritesPokemon,
    });
  };

  const data = { user, login, logout, toggleFavoritPokemon };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };

export default UserContext;
