import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherDetails from "../../components/weatherDetails/index.tsx";

describe("WeatherDetails Component", () => {
  const mockWeather = {
    name: "São Paulo",
    weather: { description: "Céu limpo" },
    main: { temp: 25, feels_like: 27, temp_min: 22, temp_max: 28, humidity: 60 },
    sys: { sunrise: 1700000000, sunset: 1700050000 },
    wind: { speed: 5 },
  };

  it("Should render weather information correctly", () => {
    render(<WeatherDetails weather={mockWeather} />);

    expect(screen.getByText("Cidade: São Paulo")).toBeInTheDocument();
    expect(screen.getByText("Descrição: Céu limpo")).toBeInTheDocument();
    expect(screen.getByText("Temperatura: 25")).toBeInTheDocument();
    expect(screen.getByText("Sensação Térmica: 27")).toBeInTheDocument();
    expect(screen.getByText("Temperatura Mínima: 22")).toBeInTheDocument();
    expect(screen.getByText("Temperatura Máxima: 28")).toBeInTheDocument();
    expect(screen.getByText("Úmidade: 60%")).toBeInTheDocument();
    expect(screen.getByText("Velocidade dos Ventos: 5 M/S")).toBeInTheDocument();
  });

  it("Must correctly format sunrise and sunset timestamps", () => {
    render(<WeatherDetails weather={mockWeather} />);

    const sunriseText = new Date(mockWeather.sys.sunrise * 1000).toLocaleString();
    const sunsetText = new Date(mockWeather.sys.sunset * 1000).toLocaleString();

    expect(screen.getByText(`Nascer do sol: ${sunriseText}`)).toBeInTheDocument();
    expect(screen.getByText(`Por do sol: ${sunsetText}`)).toBeInTheDocument();
  });
});
