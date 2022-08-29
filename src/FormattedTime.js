import React from "react";

import "./FormattedTime.css";

export default function FormattedTime(props){
    let days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    ];

    let localTime= new Date(props.time);
    let localTimeOffset = localTime.getTimezoneOffset()* 60;
    localTime.setSeconds(localTime.getSeconds() + localTimeOffset + props.timezone);
    
     let localDay = days[localTime.getDay()];
     let localHours= localTime.getHours();
     if (localHours < 10) {
         localHours= `${localHours}`;
        
     }   
    
     let localMinutes = localTime.getMinutes();
     if (localMinutes < 10) {
         localMinutes =`${localMinutes}`;
     }

    return(
        <div className="FormattedTime">
            Local Time: {localDay} {localHours}:{localMinutes}
        </div>
    );
}