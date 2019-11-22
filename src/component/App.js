import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home/Home";
import Blogs from "./Blogs/Blogs";
import Event from "./Event/Event";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/event" component={Event} />
        </Switch>
      </Router>
    );
  }
}

export default App;
