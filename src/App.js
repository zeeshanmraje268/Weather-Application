import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e60d3f9c964f915297a2dc20a50556b8`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        
      });
      setLocation('')
    }
  };
  return (
    <>
      <div className="app">
        <div className="search">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Your Location"
            onKeyUp={searchLocation}
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
             <h5>{data.name} </h5>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> :null }
            </div>
            <div className="description">
              {data.weather ? <h5 className="bold">{data.weather[0].main} </h5> :null } 
            </div>
          </div>
         {data.name !== undefined && 
          <div className="bottom">
            <div className="feels">
            {data.main ? <h5 className="bold">{data.main.feels_like.toFixed()}°C </h5> :null } 
              <h6>Feels Like</h6>
            </div>
            <div className="humidity">
            {data.main ? <h5 className="bold">{data.main.humidity}% </h5> :null } 
              <h6>Humidity</h6>
            </div>
            <div className="winds">
            {data.wind ? <h5 className="bold">{data.wind.speed.toFixed()} MPH </h5> :null } 
              <h6>Wind Speed</h6>
            </div>
          </div>
         }
        </div>
      </div>
    </>
  );
};

export default App;
