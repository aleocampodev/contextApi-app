import React, { useState } from "react";
import NavBar from "./components/NavBar";
import PokemonList from "./components/PokemonList";
import UserContext from "./contexts/UserContext";

const initialUser = {
  id: 1,
  name: "Alejandra",
  favoritesPokemon: [1, 2, 3],
};
function App() {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };
  const data = { user, login, logout };
  return (
    <div>
      <UserContext.Provider value={data}>
        <NavBar />
        <PokemonList />
      </UserContext.Provider>
    </div>
  );
}

export default App;
