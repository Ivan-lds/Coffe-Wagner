import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar">
      <Link to="/" id="logo">
        Coffe
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {isHomePage ? (
            <a href="#catalogo">Catálogo</a>
          ) : (
            <Link to="/#catalogo">Catálogo</Link>
          )}
        </li>
        <li>
          {isHomePage ? (
            <a href="#contact">Contato</a>
          ) : (
            <Link to="/#contact">Contato</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
