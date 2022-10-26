import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

const Inputs = ({ setQuery }) => {

  const [city, setCity] = useState("");
  const searchCityHandler = () => {
    if (city !== "") setQuery({ q: city, units: "metric" })
  };

  const locationHandler = () => {
    if ( navigator.geolocation) {
      toast.info('Fetching users location.')
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Location fetched!')
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery( {lat, lon, units: "metric"})
      });
    };
  };

  return ( 
  <div className="inputs">
    <div className="search-input">
      <input 
        type="text" 
        className="text-input" 
        placeholder="search for city..." 
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
      />
      <UilSearch size={30} className="input-icons" onClick={searchCityHandler}/>
      <UilLocationPoint size={30} className="input-icons" onClick={locationHandler}/>
    </div>
  
  </div>)

};

export default Inputs;
