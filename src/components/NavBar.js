import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "block",
  padding: "6px 0",
  textDecoration: "none",
  color: "blue",
};

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
              fontWeight: "bold",
              color: "darkblue",
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            exact
            style={linkStyles}
            activeStyle={{
              fontWeight: "bold",
              color: "darkblue",
            }}
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/directors"
            exact
            style={linkStyles}
            activeStyle={{
              fontWeight: "bold",
              color: "darkblue",
            }}
          >
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actors"
            exact
            style={linkStyles}
            activeStyle={{
              fontWeight: "bold",
              color: "darkblue",
            }}
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;