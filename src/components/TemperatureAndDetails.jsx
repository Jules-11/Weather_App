import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrl } from "../Services/weatherServicee";

const TemperatureAndDetails = ({ weather: {
  details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
} }) => {
  return (
    <>
      <div className="weather">
        <p>{details}</p>
      </div>
      <div className="temp-details">
        <img
          src={iconUrl(icon)}
          alt=""
          className="temp-img"
        />
        <p className="temp">{`${temp.toFixed()} °C`}</p>
        <div className="weather-details">
          <div className="weather-in-details">
            <UilTemperature size={18} className="temp-meter" />
            Real feel: <span className="temp-feel-like">{`${feels_like.toFixed()} °C`}</span>
          </div>

          <div className="weather-in-details">
            <UilTear size={18} className="temp-meter" />
            Humidity: <span className="temp-feel-like">{`${humidity.toFixed()} %`}</span>
          </div>

          <div className="weather-in-details">
            <UilWind size={18} className="temp-meter" />
            Wind: <span className="temp-feel-like">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="overall-details">
        <UilSun />
        <p className="info-details">
          Rise: <span className="details-info">{formatToLocalTime(sunrise, timezone, "HH:mm")}</span>
        </p>
        <p className="info-details-seperator">|</p>

        <UilSunset />
        <p className="info-details">
          Sunset: <span className="details-info">{formatToLocalTime(sunset, timezone, "HH:mm")}</span>
        </p>
        <p className="info-details-seperator">|</p>

        <UilArrowUp />
        <p className="info-details">
          High: <span className="details-info">{`${temp_max.toFixed()} °C`}</span>
        </p>
        <p className="info-details-seperator">|</p>

        <UilArrowDown />
        <p className="info-details">
          Low: <span className="details-info">{`${temp_min.toFixed()} °C`}</span>
        </p>
      </div>
    </>
  );
};

export default TemperatureAndDetails;
