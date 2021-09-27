import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Design from './Design'
import Dsgn234 from './Dsgn234'
import HoverActivity from './dsgn234/exercises/HoverActivity'
import './styles/App.css';

class App extends React.Component {
  render() {
      return (
        <div className="App">
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/design">
              <Design />
            </Route>
            <Route path="/dsgn234">
              <Dsgn234 />
              {/* <Route path="/hoveractivity">
                <HoverActivity />
              </Route> */}
            </Route>
          </Switch>
          </div>
            );
  }
}

export default App;