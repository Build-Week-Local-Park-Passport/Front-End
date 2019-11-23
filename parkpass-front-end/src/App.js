import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Search from './components/Search';
import { getToken } from './utils/getToken';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { useApi } from './utils/api';
import { ParksContext } from './contexts/ParksContext';
import { FavesContext } from './contexts/FavesContext';
import { SignedInContext } from './contexts/SignedInContext';
import ParkPage from './components/Parks/ParkPage';
import AddPark from './components/Parks/AddPark';
import EditPark from './components/Parks/EditPark';
import UserHome from './components/User/UserHome';
import Login from './components/Login';
import Signup from './components/Signup';
import BottomNav from './components/Nav/BottomNav';
import './App.css';




function App() {

  // check if token exists. return token if does, return null if not.
  const isSignedIn = getToken()

  const [parks, error] = useApi()
  const [faves, setFaves] = useState([])

  const addToFaves = park => {
    setFaves([
      park,
      ...faves
    ])
  }

  const [parkToEdit, setParkToEdit] = useState({})
  console.log(parkToEdit)

  return (
    <SignedInContext.Provider value={isSignedIn}>
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

          <Route exact path="/parks/:id" render={props => (
            <ParkPage {...props} setParkToEdit={setParkToEdit} />
          )} />
          
          <Route exact path="/editpark" render={props => (
            <EditPark {...props} parkToEdit={parkToEdit} />
          )} />

           <BottomNav />
        </div>
      </ParksContext.Provider>
    </SignedInContext.Provider>
  );
}

export default withRouter(App);