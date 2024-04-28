import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { GlobalState } from "../../context/GlobalContext";


export default function Navbar() {
  const { handleSubmit, searchParam, setSearchParam } = useContext(GlobalState);

  return (
    <nav className="navbar">
      <h2>
        <Link className="nav-link" to={"/"}>
          Food Recipe
        </Link>
      </h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          type="text"
          placeholder="Enter Items..."
          className="search-input"
        />
        <button onClick={handleSubmit} className="submit-btn">
          Search
        </button>
      </form>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/favourites"}>
            Favourites
          </Link>
        </li>
      </ul>
      
    </nav>
  );
}
