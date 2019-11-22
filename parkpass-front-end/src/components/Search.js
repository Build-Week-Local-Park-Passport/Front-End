import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import ParkCard from "./Parks/ParkCard";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "stretch",
    marginTop: "15px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  Link: {
    textDecoration: "none",
    color: "inherit"
}
}));

export default function SearchForm(props) {
  const classes = useStyles();

  const [ data, setData ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ filter, setFilter]  = useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
 

useEffect(() => {
  Axios
  .get("https://park-passport.herokuapp.com/api/parks")
  .then (response => {
    const foundParks = response.data.filter(park => park.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setData(foundParks);
  });
  },[search]);

  const handleChange = event => {
    setSearch(event.target.value);
    setFilter(event.target.value)
  };

    return (
      <section className="search-form">
        <TextField
        id="name"
        label="Search Parks"
        type="search"
        margin="normal"
        variant="outlined"
        value={search}
        onChange={handleChange}
        />    

        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Filters
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={""}>Pool</MenuItem>
          <MenuItem value={20}>Hiking</MenuItem>
          <MenuItem value={"Warrior"}>Fishing</MenuItem>
          <MenuItem value={50}>Wildlife</MenuItem>
          <MenuItem value={60}>Camping</MenuItem>
          <MenuItem value={70}>Disc Golf</MenuItem>
          <MenuItem value={"Lacy"}>Dog Park</MenuItem>
          <MenuItem value={90}>Picnic Area</MenuItem>
          <MenuItem value={"Rainey"}>Playground</MenuItem>
          <MenuItem value={110}>Soccer Field</MenuItem>
          <MenuItem value={120}>Paddle Boats</MenuItem>
          <MenuItem value={130}>Tennis Courts</MenuItem>
          <MenuItem value={140}>Walking Paths</MenuItem>
          <MenuItem value={150}>Bird Watching</MenuItem>
          <MenuItem value={160}>Volletball Court</MenuItem>
          <MenuItem value={170}>Basketball Court</MenuItem>
        </Select>  
        </FormControl>

        {data.map((park => {
        return (
        <Link className={classes.Link} to={`parks/${park.id}`}>
        <ParkCard 
        key={park.id} 
        name={park.name} 
        description={park.description} 
        location={park.location} 
        review={park.review}
        addToFaves={props.addToFaves}
          />
        </Link>        
        )})
        )}

      </section>
    )
}