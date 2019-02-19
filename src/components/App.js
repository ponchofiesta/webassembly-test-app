import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Tests from "./Tests";
import Test from "./Test";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/' component={Tests}/>
          <Route path='/test/:id' component={Test}/>
        </Switch>
      </main>
    );
  }
}

export default App;
