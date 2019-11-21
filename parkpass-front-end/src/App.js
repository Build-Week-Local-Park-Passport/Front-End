import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Search from './components/Search';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { useApi } from './utils/api';
import { ParksContext } from './contexts/ParksContext';
import { FavesContext } from './contexts/FavesContext';
import ParkPage from './components/Parks/ParkPage';
import UserHome from './components/User/UserHome';
import Login from './components/Login';
import Signup from './components/Signup';
import AddPark from './components/Parks/AddPark';
import BottomNav from './components/Nav/BottomNav';
import './App.css';


function App() {

  const [parks, error] = useApi()
  const [newParks, setParks] = useState([
    {
      id: 20,
      park: "1",
      location: "2",
      description: "3"
    }
  ]);

  const addNewPark = park => {
    setParks([...parks, park]);
  };
  console.log(parks);

  const [faves, setFaves] = useState([])

  const addToFaves = park => {
    setFaves([
      park,
      ...faves
    ])
  }

  return (
    <ParksContext.Provider value={parks}>
      <div className="App">
        <Nav />
        <h1>ParkPass App</h1>

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />       
        <Route exact path="/" render={props => (
          <Search {...props} addToFaves={addToFaves} />
        )} />

        <FavesContext.Provider value={faves}>
          <ProtectedRoute exact path="/account" component={UserHome} />
        </FavesContext.Provider>

        <ProtectedRoute exact path="/addpark" component={AddPark} />
        <Route path="/parks/:id" component={ParkPage} />

        <BottomNav addNewPark={addNewPark}/>
      </div>
    </ParksContext.Provider>
  );
}

export default withRouter(App);