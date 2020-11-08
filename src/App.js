import React from "react";

import Home from './components/Home';
import Profile from './components/Profile';
import Following from './components/Following';
import Search from './components/Search';

import './css/main.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {
  return (
      <main>
          <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/profile' component={Profile} />
              <Route path='/following' component={Following} />
              <Route path='/search' component={Search} />
              <Route component={Error} />
          </Switch>
      </main>
  );
}