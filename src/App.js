import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./Services/weatherServicee";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({ q: "barcelona", units: "metric" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location.';
      toast.info('Fetching weather for ' + message);

      await getFormattedWeatherData({ ...query }).then((data) => {
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)

        setWeather(data);
      });
    };
    fetchWeather();
  }, [query]);

  

  return (
    <div className="top-container">
      <TopButtons setQuery={setQuery}/>
      <Inputs  setQuery={setQuery}/>
      {weather && (
        <>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather}/>

          <Forecast title="hourly forecast" items={weather.hourly}/>
          <Forecast title="daily forecast" items={weather.daily}/>
          

        </>
      )};
      <ToastContainer autoClose={4000} theme='colored' newestOnTop={true}/>
    </div>
  );
  
}

export default App;
