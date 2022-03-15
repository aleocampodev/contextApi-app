import React, { createContext, useEffect, useState } from "react";
import { useLocalStorageValue } from "@mantine/hooks";

const UserContext = createContext();

const initialUser = {
  id: 1,
  name: "Alejandra",
  favoritesPokemon: [1, 2, 3],
};
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const [favoritesPokemon, setfavoritesPokemon] = useLocalStorageValue({
    key: "favoritesPokemon",
    defaultValue: [],
  });

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const getPokemonFavorite = JSON.parse(
      localStorage.getItem("favoritesPokemon")
    );

    if (getPokemonFavorite) {
      setfavoritesPokemon(user.favoritesPokemon);
    }
    console.log("hola componente");
  }, []);

  const toggleFavoritPokemon = (pokemonId) => {
    const getPokemonFavorite = JSON.parse(
      localStorage.getItem("favoritesPokemon")
    );
    const isFavorite = user.favoritesPokemon.includes(pokemonId);
    const favoritesPokemon = isFavorite
      ? /*Delete*/ user.favoritesPokemon.filter((id) => id !== pokemonId)
      : [...user.favoritesPokemon, pokemonId];
    /* agregarla*/
    setUser({
      ...user,
      favoritesPokemon: favoritesPokemon,
    });

    if (getPokemonFavorite !== null) {
      setfavoritesPokemon({
        ...favoritesPokemon,
        defaultValue: favoritesPokemon,
      });
    } else {
      setfavoritesPokemon({
        ...favoritesPokemon,
        defaultValue: favoritesPokemon,
      });
    }
  };

  useEffect(() => {
    if (favoritesPokemon.defaultValue?.length > 0) {
      localStorage.setItem(
        "favoritesPokemon",
        JSON.stringify(favoritesPokemon.defaultValue)
      );
    }
  }, [favoritesPokemon]);

  console.log(favoritesPokemon, user, "hol apokemon");
  const data = { user, login, logout, toggleFavoritPokemon };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };

export default UserContext;
