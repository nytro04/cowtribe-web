import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./scss/main.scss";
import Home from "./components/HomePage/Home";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
