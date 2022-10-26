import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Barcelona",
    },
    {
      id: 2,
      title: "Nairobi",
    },
    {
      id: 3,
      title: "Montreal",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Auckland",
    },
  ];

  return <div className="top-bottons">
      {cities.map((city) => (
          <button className="city-button" key={city.id} onClick={() => setQuery({ q: city.title, units: "metric"  })}>{city.title}</button>
      ))}
  </div>;
};

export default TopButtons;
