import React, {useState } from 'react';
import AddPark from "../Parks/AddPark"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../../App.css';
import { axiosWithAuth } from "../../utils/api"

const useStyles = makeStyles(theme => ({
  container: {
    display: 'block',
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 345,
    margin: "20px auto",
  },
  input: {
    margin: theme.spacing(1),
    marginTop: "20px"
  },
  button: {
    margintop: "20px"
  },
  dialog: {
    maxWidth: 345,
    display: "block"
    },
    fab: {
      margin: theme.spacing(1),
    }
}));

const BottomNav = props => {
  const [park, setPark] = useState({
    park: "",
    location: "",
    description: ""
  });

  const handleChange = event => {
    setPark({ ...park, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    const newPark = {
      ...park,
      id: Date.now()
    };
    axiosWithAuth()
        .post('https://park-passport.herokuapp.com/api/parks', newPark) 
        .then(res => {
          console.log("fired", res);
          setPark({ park: "", location: "", description: ""});
          props.addNewPark(newPark);
          handleClose();
        })
  };


  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  return (
    <div className="addParkButton" >
      <Fab color="primary" aria-label="add" size="large" onClick={handleClickOpen} className={classes.fab} >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} >
        <form onSubmit={submitHandler}>
        <DialogTitle id="form-dialog-title">Fill out the form below</DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText>
            Add an awesome park that you've been to!
          </DialogContentText>
          <TextField
          id="standard-basic"
          className={classes.textField}
          label="Add New Park"
          margin="normal"
          name="park"
          value={park.park}
          onChange={handleChange}
        />
      <TextField
          id="standard-basic"
          className={classes.textField}
          label="Add Park Location"
          margin="normal"
          name="location"
          value={park.location}
          onChange={handleChange}
        />
      <TextField
          id="standard-basic"
          className={classes.textField}
          label="Add Park Description"
          margin="normal"
          multiline
          rowsMax="4"
          name="description"
          value={park.description}
          onChange={handleChange}
        />
        </DialogContent>
        <DialogActions>
        <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
        >
        Add Park
      </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default BottomNav;
