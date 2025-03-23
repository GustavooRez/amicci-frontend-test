import React from "react";
import { WeatherDetailsProps } from "../../interfaces/weatherDetails/index.tsx";
import {H1WD, H3WD, DivFlex2C, DivFlex3C, DivWD, PWD, BolderWD, SeparatorWD} from "./index.ts"

const weatherDetails = ({ weather }: WeatherDetailsProps) => {
  const formatTimeStamp = (timeStamp: number) => {
    return new Date(timeStamp * 1000).toLocaleString().split(", ")[1];
  };
  const capitalized = (str: string) => {return str[0].toUpperCase() + str.slice(1)}
  return (
    <DivWD>
      <H1WD>{weather.name}</H1WD>
      <H1WD>{weather.main.temp.toFixed(1)}ºC</H1WD>
      <H3WD>{capitalized(weather.weather[0].description)}</H3WD>
      <DivFlex2C>
        <DivWD>
          <BolderWD>Úmidade</BolderWD>
          <PWD>{weather.main.humidity}%</PWD>
        </DivWD>
        <DivWD>
          <BolderWD>Velocidade dos Ventos</BolderWD>
          <PWD>{weather.wind.speed} MPS</PWD>
        </DivWD>
      </DivFlex2C>
      <SeparatorWD/>
      <DivFlex3C columns={3}>
        <DivWD>
          <BolderWD>Sens. Térmica</BolderWD>
          <PWD>{weather.main.feels_like.toFixed(1)}ºC</PWD>
        </DivWD>
        <DivWD>
          <BolderWD>Temp. Mínima</BolderWD>
          <PWD>{weather.main.temp_min.toFixed(1)}ºC</PWD>
        </DivWD>
        <DivWD>
          <BolderWD>Temp. Máxima</BolderWD>
          <PWD>{weather.main.temp_max.toFixed(1)}ºC</PWD>
        </DivWD>
      </DivFlex3C>
      <SeparatorWD/>
      <DivFlex2C>
        <DivWD>
          <BolderWD>Nascer do sol</BolderWD>
          <PWD>{formatTimeStamp(weather.sys.sunrise)}</PWD>
        </DivWD>
        <DivWD>
          <BolderWD>Por do sol</BolderWD>
          <PWD>{formatTimeStamp(weather.sys.sunset)}</PWD>
        </DivWD>
      </DivFlex2C>
    </DivWD>
  );
};

export default weatherDetails;
