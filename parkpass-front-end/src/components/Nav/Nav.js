import React from 'react'
import { Link } from 'react-router-dom'
import { getToken } from '../../utils/getToken'
import { signout } from '../../utils/signout'
import { makeStyles } from '@material-ui/core/styles';
import color from '@material-ui/core/colors/amber';
import Logo from "./Parkpass.png";
import { fontFamily } from '@material-ui/system';
import '../../index.css'

const useStyles = makeStyles({
  nav: {
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-around",
    borderBottom: "1px solid black",
    backgroundColor: "green",
    alignItems: "center"
  },
  logo: {
    "height": "45px",
    "width": "auto",
    float: "left",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontFamily: "Raleway",
    fontSize: "18px"
  },
  button: {
    "border": "none",
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "orange",
    color: "black",
    fontFamily: "Raleway",
    fontSize: "16px"
  }
  
});


export default function Nav() {

  const signedIn = getToken()
  const classes = useStyles();


  return (
    <div className={classes.div}>
      <nav className={classes.nav}
>

      {/* https://material-ui.com/components/tabs/ */}
      <Link to="/"><img src={Logo} className={classes.logo}/></Link>
        <Link to="/" className={classes.link}>Home</Link>
        {!signedIn && <Link to="/login" className={classes.link}>Login</Link>}
        {!signedIn && <Link to="/signup" className={classes.link}>Signup</Link>}
        {signedIn && <Link to="/account" className={classes.link}>Account</Link>}


        {signedIn && <button className={classes.button} onClick={e => signout(e)}><strong>Logout</strong></button>}

      </nav>
    </div>
  )
}