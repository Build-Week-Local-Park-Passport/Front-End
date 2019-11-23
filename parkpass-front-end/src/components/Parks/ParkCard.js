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


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: "20px auto",
    boxShadow: "0 8px 40px -15px rgba(0,0,0,0.3)",
    "borderRadius": "5px",
    "textDecoration": "none"
    },
  details: {
    marginTop: "10px",
    textAlign: "left"
  },
  box: {
    marginTop: "20px",
    marginBottom: "-10px"
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

  const isSignedIn = useContext(SignedInContext)

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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Divider variant="middle" />
          <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="p">
            Location: {location}
            <br></br>
            Description: {description}
          </Typography>
          </div>
          <Box className={classes.box} component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Excellent</Typography>
          <StyledRating
          name="customized-color"
          value={5}
          icon={<FavoriteIcon fontSize="inherit" />}
          />
          </Box>
        </CardContent>
        </CardActionArea>
        
        {isSignedIn && <button onClick={(event) => favorite(event)}>{isFaved ? "❣️" : "♡"}</button>}
        
    </Card>
  );
}