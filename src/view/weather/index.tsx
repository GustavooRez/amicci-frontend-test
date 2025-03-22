import React, {useState} from "react";
import Input from "../../components/input/index.tsx";
import Button from "../../components/button/index.tsx";
import Request from "../../utils/request.tsx";

const Weather = () => {
    const [inputValue, setInputValue] = useState()
    const searchByCity = async () => {
        const response = await Request({url: `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${process.env.REACT_OPEN_WEATHER_API_KEY}`, method: "GET", body: {}})
    }

    const searchByUser = () => {

    }

    return (
        <div>
            <Input inputName="city" onEdit={setInputValue}/>
            <Button buttonLabel="Pesquisar por cidade" onClick={searchByCity}/>
            <Button buttonLabel="Pesquisar por endereço" onClick={searchByUser}/>
        </div>
    )
}

export default Weather