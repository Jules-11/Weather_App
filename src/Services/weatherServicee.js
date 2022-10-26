import { DateTime } from "luxon";

const API_KEY = "8df9b48652e21889bbff4b0362218fb7";
const BASE_URL = "https://api.openweathermap.org/data/";

const getWeatherData = (version, infoType, searchParams) => {
  const url = new URL(BASE_URL + version + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    sys: { country, sunrise, sunset },
    wind: { speed },
    name,
    dt,
    weather,
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    country,
    sunrise,
    sunset,
    speed,
    name,
    dt,
    details,
    icon,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;

  daily = daily.slice(1, 6).map(d => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  hourly = hourly.slice(1, 6).map(d => {
    return {
      title: formatToLocalTime(d.dt, timezone, "HH:mm"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });
  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "2.5",
    "weather",
    searchParams
  ).then(formatCurrentWeather);
  const { lat, lon } = formattedCurrentWeather;

  const formattedForcastWeather = await getWeatherData("3.0", "onecall", {
    lat,
    lon,
    exclude: "current, minutely",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForcastWeather};
};

const formatToLocalTime = (
  sec,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'HH:mm"
) => DateTime.fromSeconds(sec).setZone(zone).toFormat(format);

const iconUrl = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`;


export { formatToLocalTime, iconUrl }
export default getFormattedWeatherData;
