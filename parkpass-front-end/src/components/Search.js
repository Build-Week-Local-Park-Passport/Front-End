import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import ParkCard from "./Parks/ParkCard";

export default function SearchForm() {

  const [ data, setData ] = useState([]);
  const [ search, setSearch ] = useState("");
 
useEffect(() => {
  Axios
  .get("https://park-passport.herokuapp.com/api/parks")
  .then (response => {
    const parks = response.data.filter(pk => pk.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setData(parks);
  });
  },[search]);

  const HandleChange = event => {
    setSearch(event.target.value)
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
        onChange={HandleChange}
        />        

        {data.map((park => {
        return (
        <ParkCard
        key={park.id} 
        name={park.name} 
        description={park.description} 
        location={park.location} 
          />
        )})
        )}

      </section>
    )
}
      
      





