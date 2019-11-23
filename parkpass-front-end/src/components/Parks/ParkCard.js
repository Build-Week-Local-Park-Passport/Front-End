import React, { useState, useContext } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { SignedInContext } from '../../contexts/SignedInContext';
import { Link } from 'react-router-dom';
import '../../index.css'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: "40px auto",
    boxShadow: "0 8px 40px -15px rgba(0,0,0,0.3)",
    "borderRadius": "5px",
    "textDecoration": "none",
    border: "1px solid gray",
    backgroundColor: "#fefcfa"
    },
  details: {
    marginTop: "10px",
    textAlign: "left"
  },
  box: {
    marginTop: "20px",
    marginBottom: "-10px"
  },
  parkName: {
    fontFamily: "Raleway"
  },
  parkDetails: {
    fontFamily: "Merriweather"
  },
  button: {
    border: "none",
    width: "100%",
    padding: "10px 0",
    borderTop: "1px solid lightgray",
    backgroundColor: "#77F7CC",
    fontFamily: "Merriweather"

  }
}));

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);


export default function ParkCard( { name, location, description, addToFaves, removeFromFaves } ) {

  const classes = useStyles();

  const [isFaved, setIsFaved] = useState(false);
  
  const favorite = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const park = {
      name: name,
      location: location,
      description: description
    }
    setIsFaved(!isFaved)
    if(!isFaved) {
      addToFaves(park)
    } else {
      removeFromFaves(park)
    }
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent >
          <Typography className={classes.parkName} gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Divider variant="middle" />
          <div className={classes.details}>
          <Typography className={classes.parkDetails} variant="body2" color="textSecondary" component="p">
            State: <strong>{location} </strong>
            <br></br>
            Description: <strong>{description}</strong>
          </Typography>
          </div>
          <Box className={classes.box} component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend" className={classes.parkDetails}>Excellent</Typography>
          <StyledRating
          name="customized-color"
          value={5}
          icon={<FavoriteIcon fontSize="inherit" />}
          />
          </Box>
         
        </CardContent>
        
        </CardActionArea>
        
        <button className={classes.button} onClick={(event) => favorite(event)}>{isFaved ? "☑️" : "⬛"} Add to your Favorite's List</button>
    </Card>
  );
}