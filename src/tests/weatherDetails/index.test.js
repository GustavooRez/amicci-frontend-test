import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherDetails from "../../components/weatherDetails/index.tsx";

describe("WeatherDetails Component", () => {
  const mockWeather = {
    name: "São Paulo",
    main: { temp: 25.3, feels_like: 27.2, temp_min: 22.1, temp_max: 28.5, humidity: 60 },
    weather: [{ description: "céu limpo" }],
    sys: { sunrise: 1700000000, sunset: 1700050000 },
    wind: { speed: 5.2 },
  };

  it("Should render city name and temperature correctly", () => {
    render(<WeatherDetails weather={mockWeather} />);
    
    expect(screen.getByText("São Paulo")).toBeInTheDocument();
    expect(screen.getByText("25.3ºC")).toBeInTheDocument();
  });

  it("Should render the weather description correctly with the first letter capitalized", () => {
    render(<WeatherDetails weather={mockWeather} />);
    
    expect(screen.getByText("Céu limpo")).toBeInTheDocument();
  });

  it("Should render humidity and wind details", () => {
    render(<WeatherDetails weather={mockWeather} />);
    
    expect(screen.getByText("Úmidade")).toBeInTheDocument();
    expect(screen.getByText("60%")).toBeInTheDocument();
    expect(screen.getByText("Velocidade dos Ventos")).toBeInTheDocument();
    expect(screen.getByText("5.2 MPS")).toBeInTheDocument();
  });

  it("Should render the minimum, maximum and wind chill temperatures", () => {
    render(<WeatherDetails weather={mockWeather} />);
    
    expect(screen.getByText("Sens. Térmica")).toBeInTheDocument();
    expect(screen.getByText("27.2ºC")).toBeInTheDocument();
    expect(screen.getByText("Temp. Mínima")).toBeInTheDocument();
    expect(screen.getByText("22.1ºC")).toBeInTheDocument();
    expect(screen.getByText("Temp. Máxima")).toBeInTheDocument();
    expect(screen.getByText("28.5ºC")).toBeInTheDocument();
  });

  it("Must correctly format sunrise and sunset times", () => {
    render(<WeatherDetails weather={mockWeather} />);

    const sunriseText = new Date(1700000000 * 1000).toLocaleString().split(", ")[1];
    const sunsetText = new Date(1700050000 * 1000).toLocaleString().split(", ")[1];

    expect(screen.getByText("Nascer do sol")).toBeInTheDocument();
    expect(screen.getByText(sunriseText)).toBeInTheDocument();
    expect(screen.getByText("Por do sol")).toBeInTheDocument();
    expect(screen.getByText(sunsetText)).toBeInTheDocument();
  });
});
