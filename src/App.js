import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import GiftList from './views/gifs'

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '1rem' }}>
        <Switch>
          <Route path="">
            <GiftList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
