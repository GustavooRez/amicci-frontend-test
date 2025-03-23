import React from "react";

const weatherDetails = ({ weather }: WeatherDetailsProps) => {
  const formatTimeStamp = (timeStamp: number) => {
    return new Date(timeStamp * 1000).toLocaleString();
  };
  return (
    <div>
      <p>Cidade: {weather.name}</p>
      <p>Descrição: {weather.weather.description}</p>
      <p>Temperatura: {weather.main.temp}</p>
      <p>Sensação Térmica: {weather.main.feels_like}</p>
      <p>Temperatura Mínima: {weather.main.temp_min}</p>
      <p>Temperatura Máxima: {weather.main.temp_max}</p>
      <p>Úmidade: {weather.main.humidity}%</p>
      <p>Nascer do sol: {formatTimeStamp(weather.sys.sunrise)}</p>
      <p>Por do sol: {formatTimeStamp(weather.sys.sunset)}</p>
      <p>Velocidade dos Ventos: {weather.wind.speed} M/S</p>
    </div>
  );
};

export default weatherDetails;
