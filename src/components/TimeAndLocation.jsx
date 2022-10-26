import React from "react";
import { formatToLocalTime } from "../Services/weatherServicee";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  
  return (
    <>
      <div className="time-location">
        <p className="date">{formatToLocalTime(dt, timezone)}</p>
      </div>
      <div className="time-location">
        <p className="city">{ `${name}, ${country}`}</p>
      </div>
    </>
  );
};

export default TimeAndLocation;
