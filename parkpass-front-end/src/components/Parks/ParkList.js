import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
import ParkCard from "./ParkCard";
import { ParksContext } from "../../contexts/ParksContext";

export default function ParkList() {
  // TODO: Add useState to track data from useEffect

  const parks = useContext(ParksContext)

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
