import React from "react";
import WeatherIcon from "./WeatherIcon";

import moment from "moment-timezone";

export default function WeatherForecastDay(props){
    console.log(props.data.dt)
    return(
        <div className="WeatherForecastDay">
            <div className="WeatherForecast-day">
                 <p> {moment(props.data.dt * 1000).format('dddd')}</p>
            </div>

            <WeatherIcon code={props.data.weather[0].icon} size={40} />
            
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperatures-max">{Math.round(props.data.temp.max)}°C</span>
                    <div className="divs" ></div>
                <span className="WeatherForecast-temperatures-min">{Math.round(props.data.temp.min)}°C</span>
            </div>
        </div>

        
     
    );
}