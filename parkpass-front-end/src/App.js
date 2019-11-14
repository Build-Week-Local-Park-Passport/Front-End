import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ParkList from './components/Parks/ParkList';
import UserHome from './components/User/UserHome';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>ParkPass App</h1>

      <Route exact path="/" component={ParkList} />
      <Route exact path="/account" component={UserHome} />
    </div>
  );
}

export default App;
