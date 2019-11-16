import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';


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

export default function ParkCard( { name, location, description } ) {
  const classes = useStyles();
  const [value, setValue] = useState(2);

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
    </Card>
  );
}