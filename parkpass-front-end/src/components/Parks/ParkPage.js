import React, { useState, useEffect, useContext } from 'react'
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardActionArea from '@material-ui/core/CardActionArea';
import TextField from '@material-ui/core/TextField';
// import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { SignedInContext } from '../../contexts/SignedInContext';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: "20px auto",
    boxShadow: "0 8px 40px -15px rgba(0,0,0,0.3)",
    "borderRadius": "5px"
  },
  details: {
    marginTop: "10px",
    textAlign: "left"
  },
  box: {
    marginTop: "20px",
    marginBottom: "-10px"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    marginTop: "25px"
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

const ParkPage = (props) => {
  const isSignedIn = useContext(SignedInContext);
  const [park, setPark] = useState({
    id: '',
    name: '',
    description: '',
    location: ''
  });

  useEffect(() => {
    const id = props.match.params.id;
       axios
        .get(`https://park-passport.herokuapp.com/api/parks/${id}`)
        .then(response => {
          const currentPark = response.data
          setPark({
            id: currentPark.id,
            name: currentPark.name,
            description: currentPark.description,
            location: currentPark.location
          });

          // set the parkToEdit to the current park
          props.setParkToEdit({
            id: currentPark.id,
            name: currentPark.name,
            description: currentPark.description,
            location: currentPark.location
          });
        })
        .catch(error => {
          console.error(error);
        });
  },[]);

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
};

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {park.name}
          </Typography>

          <Divider variant="middle" />
            <div className={classes.details}>
              <Typography variant="body2" color="textSecondary" component="p">
                Location: {park.location}
                <br></br>
                Description: {park.description}
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

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
          </IconButton>

        </CardContent>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

          <TextField
          id="outlined-textarea"
          label="Leave a Review"
          placeholder=""
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <br></br>
        <StyledRating
          name="customized-color"
          value={value}
          icon={<FavoriteIcon fontSize="inherit" />}
          />
        <br></br>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
      >
        Send
      </Button>

          </CardContent>
        </Collapse>
      </CardActionArea>

      {isSignedIn && <Link to="/editpark">Edit Park</Link>}
  </Card>
  );
}

export default ParkPage;









