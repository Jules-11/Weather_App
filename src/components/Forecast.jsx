import React from 'react'
import { iconUrl } from '../Services/weatherServicee'

const Forecast = ({ title, items }) => {
  return (
    <>
        <div className='forecast-panel'>
            <p className='forecast-title'>{title}</p>
        </div>
        <hr className='hr-forecast'/>
        <div className='hourly-forecast'>
          {items.map((item, i) => (
              <div className='hourly-forcast-details' key={i}>
              <p className='forecast-hour'>{item.title}</p>
              <img
        src={iconUrl(item.icon)}
        alt=""
        className="forecast-img"
      />
        <p className='forecast-temp'>{`${item.temp.toFixed()} °C`}</p>
          </div>
          ))}
        </div>
    </>
  )
}

export default Forecast