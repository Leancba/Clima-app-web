import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(()=>{
setLoaded(false)
},[props.coordinates]);


function handleResponse(response){
       setForecast(response.data.daily);
       setLoaded(true);
    }

    function load(){
    const apiKey="ff26d804d0d9d838fc3e57227eed4bcc";
    let unit="metric";
    let longitude=props.coordinates.lon;
    let latitude=props.coordinates.lat;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    }

    if (loaded){
 return (
        <div className="WeatherForecast">
            
                
                {forecast.map(function(dailyForecast, index){
                    if (index < 7) {
                    return (
                <div className="col auto" key={index}>
               <WeatherForecastDay data={dailyForecast} unit={props.unit}/>
                </div>
                    );
                    } else{
                        return null;
                    }
                })}
                  
        </div>
    );

    } else {
    load();

    return null;

}
}
