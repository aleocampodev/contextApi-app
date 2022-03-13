import React from "react";
import NavBar from "./components/NavBar";
import PokemonList from "./components/PokemonList";
import { PokemonProvider } from "./contexts/PokemonContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <PokemonProvider>
          <NavBar />
          <PokemonList />
        </PokemonProvider>
      </UserProvider>
    </div>
  );
}

export default App;
