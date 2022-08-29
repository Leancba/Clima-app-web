import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import Loader from "react-loader-spinner";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
    const [city, setCity]= useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready : false});
    
    const [unit, setUnit] = useState("celsius");

    function handleResponse(response){
        console.log(response.data)
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            city: response.data.name, 
            country: response.data.sys.country,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
            temperature:response.data.main.temp, 
            wind: response.data.wind.speed,
            timezone: response.data.timezone,
            feels_like : response.data.main.feels_like,
            pressure : response.data.main.pressure,
            
            
        });
    }

    function search(){
    const apiKey="ff72838e9031d5bea109425dc6b40694";
    let unit = "metric";
     let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
        
    }


    if (weatherData.ready){
        return(
    <div  >
        <div className="">
             <div>
                <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit}/>
             </div>
        </div>
            <div className="days">
                <WeatherForecast coordinates={weatherData.coordinates}/>
            </div>
            <form onSubmit={handleSubmit}>
             <div className="buscador">
                 <div className="">
                        <input 
                         type="search" 
                         placeholder="Enter a city..."
                         color="blue" 
                         className="form-control" 
                         autoFocus="on" 
                         onChange={handleCityChange}
                         />
                 </div>
                 <div className="">
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
            
             </div>
            </form>
    </div>
);
    }
    else{
        search();
    return (
        <div className="loader" >
    <Loader
        
        type="Oval"
        color="#1e1e1e"
        height={300}
        width={300}

      />
      </div>
    );
    };
        
}