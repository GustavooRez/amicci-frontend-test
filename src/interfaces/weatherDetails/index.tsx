interface WeatherDetailsProps {
    weather:{
        name: string
        weather: [{
            description: string
        }],
        main: {
            temp: number,
            feels_like: number,
            temp_min: number,
            temp_max: number,
            humidity: number,
        }
        sys: {
            sunrise: number,
            sunset: number
        }
        wind: {
            speed: number
        }
    }
}

export {WeatherDetailsProps}