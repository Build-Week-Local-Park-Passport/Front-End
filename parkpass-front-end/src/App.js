import React, { useState } from 'react';
import { Route, withRouter, useParams } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Search from './components/Search';
import { getToken } from './utils/getToken';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { useApi } from './utils/api';
import { ParksContext } from './contexts/ParksContext';
import { SignedInContext } from './contexts/SignedInContext';
import ParkPage from './components/Parks/ParkPage';
import AddPark from './components/Parks/AddPark';
import EditPark from './components/Parks/EditPark';
import UserHome from './components/User/UserHome';
import Login from './components/Login';
import Signup from './components/Signup';
import BottomNav from './components/Nav/BottomNav';
import './App.css';
import './index.css'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  title: {
    fontFamily: "Merriweather",
    color: "black"
  },
  subtitle: {
    width: "330px",
    margin: "0 auto",
    fontSize: "14px",
    fontFamily: "Merriweather",
    paddingBottom: "10px",
    color: "gray"
  }
});

function App() {

  const { id } = useParams()

  // check if token exists. return token if does, return null if not.
  const isSignedIn = getToken()
  const classes = useStyles();

  const [parks, error] = useApi()
  const [faves, setFaves] = useState([])

  const addToFaves = park => {
    setFaves([
      park,
      ...faves
    ])
  }

  const removeFromFaves = park => {
    const updatedFaves = faves.filter(fav => {
      return fav.name !== park.name
    })
    setFaves(updatedFaves)
  }

  const [parkToEdit, setParkToEdit] = useState({})

  return (
    <SignedInContext.Provider value={isSignedIn}>
      <ParksContext.Provider value={parks}>
        <div className="App">
          <Nav />
          <h1 className={classes.title}>ParkPass App</h1>
          <h3 className={classes.subtitle}>No matter where you are, <br></br>there's always a park nearby.</h3>

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />       
          <Route exact path="/" render={props => (
            <Search {...props} addToFaves={addToFaves} removeFromFaves={removeFromFaves} />
          )} />

          <Route exact path="/account" render={props => (
            <UserHome {...props} faves={faves} remove={removeFromFaves} />
          )} />

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