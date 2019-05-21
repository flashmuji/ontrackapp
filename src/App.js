import React from 'react';
import './App.scss';
import 'bootstrap/scss/bootstrap.scss';

import Home from './components/home';
import { Route, Switch} from "react-router-dom";


function App() {
  return ( 
    <div className="App container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:page" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
