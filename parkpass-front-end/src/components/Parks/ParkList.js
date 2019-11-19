import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
import ParkCard from "./ParkCard";
import { ParksContext } from "../../contexts/ParksContext";

export default function ParkList() {
  // TODO: Add useState to track data from useEffect

  // const [park, setPark] = useState([]);
  const parks = useContext(ParksContext)

  // useEffect(() => {
  //   axios
  //   .get('https://park-passport.herokuapp.com/api/parks')
  //   .then((response) => {
  //     setPark(response.data);
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.error('Server Error', error);
  //   });
  // }, []);

  return (
    <section>

      {parks.map(park => (
        <ParkCard 
        key={park.id} 
        name={park.name} 
        description={park.description} 
        location={park.location} 
        />
      ))}
    </section>
  );

}
