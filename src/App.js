import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from './About';
import Home from './Home';
import Design from './Design'
import Dsgn234 from './Dsgn234'
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
          <script src="https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/addons/p5.sound.min.js"></script>
            
          </div>
            );
  }
}

export default App;