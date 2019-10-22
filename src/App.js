import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./scss/main.scss";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Header} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
