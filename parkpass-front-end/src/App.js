import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ParkList from './components/Parks/ParkList';
import UserHome from './components/User/UserHome';
import Search from './components/Search';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  return (
    <div className="App">
      <Nav />
      <h1>ParkPass App</h1>
      <Search />

      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />

      <Route exact path="/" component={ParkList} />
      <Route exact path="/account" component={UserHome} />
    </div>
  );
}

export default App;
