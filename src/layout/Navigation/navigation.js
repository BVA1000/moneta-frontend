import React from "react";
import { Link } from "react-router-dom";
import "../../assets/fonts/fonts.css";
import "./navigation.css";

function Navigation() {
  return (
    <div id="head">
      <header>
        <nav>
          <ul>
            <li id="moneta">
              <Link to="/">Moneta®</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/coins">Coins</Link>
            </li>
            <li>
              <Link to="/currency">Currency</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
