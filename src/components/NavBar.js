import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const NavBar = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand w-100 d-flex justify-content-between">
          <h2>{user ? `Hello ${user.name}` : `Welcome`}</h2>
          {user ? (
            <button className="btn btn-primary" onClick={logout}>
              Logout
            </button>
          ) : (
            <button className="btn btn-primary" onClick={login}>
              Login
            </button>
          )}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
