import React, { useState, useEffect } from "react";
import Input from "../../components/input/index.tsx";
import Button from "../../components/button/index.tsx";
import Request from "../../utils/request.tsx";
import WeatherDetails from "../../components/weatherDetails/index.tsx"
import WeatherNotFound from "../../components/weatherNotFound/index.tsx"

const Weather = () => {
  const [inputValue, setInputValue] = useState();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    searchByUserLocation();
  }, []);

  const searchByCity = async (city: string) => {
    setLocation(null)
    const response = await Request({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&lang=pt_br&units=metric`,
      method: "GET",
      body: {},
    });
    if(response.main){
        setLocation(response)
    }else{
        setLocation(false)
    }
  };

  const searchByUserLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await Request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
        method: "GET",
        body: {},
      });
      if (response.status === "OK") {
        for (const result of response.results) {
          for (const component of result.address_components) {
            if (component.types.includes("locality")) {
              return searchByCity(component.long_name);
            }
          }
        }
      }
    });
  };

  return (
    <div>
      <Input inputName="city" onEdit={setInputValue} />
      <Button
        buttonLabel="Pesquisar por cidade"
        onClick={() => {searchByCity(inputValue)}}
      />
      <Button
        buttonLabel="Pesquisar por endereço"
        onClick={() => {searchByUserLocation()}}
      />
      {location !== null && location !== false ? <WeatherDetails weather={location}/>: location === false ? <WeatherNotFound/> : <></>}
    </div>
  );
};

export default Weather;
