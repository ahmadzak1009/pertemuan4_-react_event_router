import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Promo from "./Promo";
import Paket from "./Paket";
import Bantuan from "./Bantuan";
import Daftar from "./Daftar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laboriosam maiores saepe tempore perspiciatis quidem amet in, sunt quia, sed dolore magnam non ipsum odit veritatis repellat unde aperiam. Totam?"
    };
  }

  render() {
    return (
      <Router>
        <Nav isDaftar="tidak" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/promo" component={Promo} />
          <Route path="/paket" component={Paket} />
          <Route path="/bantuan" component={Bantuan} />
          <Route path="/daftar" component={Daftar} />
        </Switch>
      </Router>
    );
  }
}

export default App;
