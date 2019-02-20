import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import TestsPage from "./TestsPage";
import Test from "./Test";

class App extends Component {

    defaultState = {success: false, error: false, config: null};

    constructor(props) {
        super(props);
        this.state = this.defaultState;
    }

    async componentDidMount() {
        let state = this.defaultState;
        try {
            const response = await fetch('config.json');
            if (!response.ok) {
                throw Error(response.statusText)
            }
            const config = await response.json();
            state.success = true;
            state.config = config;
        } catch (error) {
            state.error = error;
        }
        this.setState(state);
    }

  render() {
      if (this.state.error) {
          return <div>Something went wrong: {this.state.error}</div>
      } else if (this.state.config) {
          return <main>
              <Switch>
                  <Route path='/' render={() => <TestsPage tests={this.state.config.tests}/>}/>
                  <Route path='/test/:id' component={Test}/>
              </Switch>
          </main>
      } else {
          return <div>Loading...</div>
      }
  }
}

export default App;
