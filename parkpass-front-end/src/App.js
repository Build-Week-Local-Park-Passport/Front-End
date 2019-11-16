import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import UserHome from './components/User/UserHome';
import Search from './components/Search';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import ParkPage from './components/Parks/ParkPage';

function App() {

  return (
    <div className="App">
      <Nav />
      <h1>ParkPass App</h1>
      {/* <Search /> */}

      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />

      {/* Component for "/" was ParkList before */}
      <Route exact path="/" component={Search} />
      <Route exact path="/account" component={UserHome} />
      <Route path="/parks/:id" component={ParkPage} />
    </div>
  );
}

export default App;
