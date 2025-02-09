import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike: 22.65,
        temp: 23.8,
        tempMax: 23.8,
        tempMin: 23.8,
        humidity: 16,
        weather: "broken clouds",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    );
}