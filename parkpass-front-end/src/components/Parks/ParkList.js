import React, { useEffect, useState } from "react";
import axios from "axios";
import ParkCard from "./ParkCard";

export default function ParkList() {
  // TODO: Add useState to track data from useEffect

  const [park, setPark] = useState([]);

  useEffect(() => {
    axios
    .get('https://park-passport.herokuapp.com/api/parks')
    .then((response) => {
      setPark(response.data);
      console.log(response);
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }, []);

  return (
    <section>

      {park.map(parks => (
        <ParkCard 
        key={parks.id} 
        name={parks.name} 
        description={parks.description} 
        location={parks.location} 
        />
      ))}
    </section>
  );

}
