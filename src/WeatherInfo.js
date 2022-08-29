import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedTime from "./FormattedTime";
import "./Wheaterinfo.css"



export default function WeatherInfo(props){
  
    return(
        <div className="container"> 

          
            <div className="main">
            <div className="info" >
                <h1 className="title">{props.data.city},{" "}{props.data.country}</h1>
            </div>
                 <div className="localtime">
                     <FormattedTime time={props.data.date} timezone={props.data.timezone}/>
                 </div>

                
                        <div className="">
                             <div className="icono1">
                                    
                                        <div className="icono2">
                                            <span className="icon" > <WeatherIcon code={props.data.icon} size={90}/></span>
                                            <div className="containergrados">
                                                 <p className="grados">{Math.round(props.data.temperature)}</p>
                                                 <p className="grados2">°C</p>
                                            </div>
                                        </div>   
                                         <div className="icono3">
                                             <p className="">{props.data.description.toUpperCase()}</p>
                                        </div> 
                                        
                             </div>                            
                                
                            </div>
                        
                            <div className="propiedades2">
                                    <div >
                                        <span>FEELS LIKE</span> <p>{Math.round(props.data.feels_like)}°C </p>
                                    </div>

                                    <div>
                                        <span>HUMIDITY:</span> <p>{Math.round(props.data.humidity)}%</p>
                                        
                                    </div>
                                    
                                    <div>
                                        
                                        <span>WIND:</span> <p>{Math.round(props.data.wind)} km/h</p> 
                                    </div>

                                    <div>
                                        <span>PRESSURE:</span> <p>{Math.round(props.data.pressure)} hPa</p>
                                    </div>                                    
                                </div>
                             
                        </div>
                
                <div className= "mapa1" >
                    <iframe 
                        className="mapita"
                        title="Mapa"
                        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39732.431663421!2d${props.data.coordinates.lon}656!3d${props.data.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1653226766312!5m2!1ses!2sar`}                 
                        width="100%" 
                        height="100%"
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>   
            </div>
            
    
       
    );
}