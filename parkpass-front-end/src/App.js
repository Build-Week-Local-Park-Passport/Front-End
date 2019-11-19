import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Search from './components/Search';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { useApi } from './utils/api';
import { ParksContext } from './contexts/ParksContext';
import ParkPage from './components/Parks/ParkPage';

import UserHome from './components/User/UserHome';
import Login from './components/Login';
import Signup from './components/Signup';


import AddPark from './components/Parks/AddPark';
import UserHome from './components/User/UserHome';
import Login from './components/Login';
import Signup from './components/Signup';
import BottomNav from './components/Nav/BottomNav';

import './App.css';


function App() {

  const [parks, error] = useApi()

  return (
    <ParksContext.Provider value={parks}>
      <div className="App">
        <Nav />
        <h1>ParkPass App</h1>

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Search} />
        <ProtectedRoute exact path="/account" component={UserHome} />
        <ProtectedRoute exact path="/addpark" component={AddPark} />
        <Route path="/parks/:id" component={ParkPage} />

        
    </div>


        <BottomNav />
      </div>

    </ParksContext.Provider>
  );
}

export default withRouter(App);
