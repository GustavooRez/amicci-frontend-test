import React, { useState, useEffect } from "react";
import Input from "../../components/input/index.tsx";
import Button from "../../components/button/index.tsx";
import Request from "../../utils/request.tsx";
import WeatherDetails from "../../components/weatherDetails/index.tsx"
import WeatherNotFound from "../../components/weatherNotFound/index.tsx"
import Loading from "../../components/loading/index.tsx"
import { Body, Buttons, Container, WeatherContainer } from "./index.ts";

const Weather = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [location, setLocation] = useState<null | boolean | {} >(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchByCity = async (city: string) => {
    setIsLoading(true)
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
    setIsLoading(false)
  };

  const searchByUserLocation = () => {
    setIsLoading(true)
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
    setIsLoading(false)
  };

  useEffect(() => {
    searchByUserLocation()
  }, []);

  return (
    <Body>

    {isLoading === true ? <Loading/> :
      <Container>
        <Input inputName="city" onEdit={setInputValue} />
        <Buttons>
          <Button
            buttonLabel="Pesquisar por cidade"
            onClick={() => {searchByCity(inputValue)}}
          />
          <Button
            buttonLabel="Pesquisar por endereço atual"
            onClick={() => {searchByUserLocation()}}
          />
        </Buttons>
        
        {location !== null ? <WeatherContainer>
          {location !== false ? <WeatherDetails weather={location}/> : <WeatherNotFound/>}
          </WeatherContainer> : <></>
        }
        
      </Container>}
    </Body>
  );
};

export default Weather;
