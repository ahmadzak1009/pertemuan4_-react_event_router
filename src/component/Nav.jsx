import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <img src={require("../images/logo.png")} />
        </Link>
        <ul>
          <li>
            <Link to="/promo">Promo</Link>
          </li>
          <li>
            <Link to="/paket">Paket</Link>
          </li>
          <li>
            <Link to="/bantuan">bantuan</Link>
          </li>
          <li>
            <Link to="/daftar">daftar</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
