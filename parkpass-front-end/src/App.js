import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import { ProtectedRoute } from './utils/ProtectedRoute';
import ParkList from './components/Parks/ParkList';
import UserHome from './components/User/UserHome';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {

  return (
    <div className="App">
      <Nav />
      <h1>ParkPass App</h1>

      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />

      <Route exact path="/" component={ParkList} />
      <ProtectedRoute exact path="/account" component={UserHome} />
    </div>
  );
}

export default App;
