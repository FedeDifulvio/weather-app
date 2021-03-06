import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Principal from './Components/principal';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import ExtendedWeather from './Components/extendedWeather';

function App() { 

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Principal/>
        </Route>
        <Route path="/ExtendedWeather">
           <ExtendedWeather/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
