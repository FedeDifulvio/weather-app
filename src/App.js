import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Principal from './Components/principal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ExtendedWeather from './Components/extendedWeather';

function App() { 

  return (
    <Router>
    <h1>holi</h1>
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
