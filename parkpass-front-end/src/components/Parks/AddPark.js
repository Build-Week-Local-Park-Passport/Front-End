import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'block',
    flexWrap: 'wrap',
    maxWidth: 345,
    margin: "20px auto",
  },
  input: {
    margin: theme.spacing(1),
    marginTop: "20px"
  },
  button: {
    margintop: "20px"
  }
}));

const AddPark = ( props ) => {
  const classes = useStyles();
  const [newPark, setNewPark ] = useState({name: "", description: "", location: ""});



  return (
    <div className={classes.container}>
      <form>
      <TextField
          id="standard-basic"
          className={classes.textField}
          label="Add New Park"
          margin="normal"
        />
      <TextField
          id="standard-basic"
          className={classes.textField}
          label="Add Park Location"
          margin="normal"
        />
      <TextField
          id="standard-basic"
          className={classes.textField}
          label="Add Park Description"
          margin="normal"
        />
      <br></br><br></br>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
      >
        Send
      </Button>
        </form>

      </div>
    );
};
export default AddPark;