import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img className="nav-logo" src={require("../images/logo.png")} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <Link className="nav-item nav-link text-white" to="/">
                  Home
                </Link>
                <Link className="nav-item nav-link text-white ml-5" to="/blogs">
                  Blogs
                </Link>
                <Link className="nav-item nav-link text-white ml-5" to="/gallery">
                  Gallery
                </Link>
                <Link className="nav-item nav-link text-white ml-5" to="/contact">
                  Contact
                </Link>
                <Link className="nav-item nav-link text-white ml-5" to="/event">
                  Simple Event
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
