import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const NavBar = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand">
          <h2>{user ? `Hola ${user.name}` : `Bienvenido ${user.name}`}</h2>
          {user ? (
            <button className="btn btn-primary" onClick={logout}>
              Cerrar Sesión
            </button>
          ) : (
            <button className="btn btn-primary" onClick={login}>
              Iniciar Sesión
            </button>
          )}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
