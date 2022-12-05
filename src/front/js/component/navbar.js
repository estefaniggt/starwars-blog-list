import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar bg-light">
      <div className="container">
        <Link to="/">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Star_wars_1977_us.svg/2560px-Star_wars_1977_us.svg.png"
            alt="Bootstrap"
            width="30"
            height="24"
          />
        </Link>

        <div className="ml-auto nav-item dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong>
              Favorites (
              {store.favorites.length > 0 ? store.favorites.length : 0})
            </strong>
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarScrollingDropdown"
          >
            {store.favorites.map((favt) => {
              return (
                <li key={favt.name}>
                  <a className="dropdown-item">
                    {favt.name}{" "}
                    <button
                      type="button"
                      className="btn mx-2"
                      onClick={(event) => actions.addFavorite(favt)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
