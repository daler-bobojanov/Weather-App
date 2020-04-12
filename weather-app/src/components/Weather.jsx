import React from 'react';

const Weather = props => (
    // <div>Weather Component</div>
    <div>
        {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}

        {props.date && <p>Date: {props.date}</p>}

        {props.temperature && <p>Temperature: {props.temperature}℉</p>}

        {props.feels_like && <p>Feels Like: {props.feels_like}℉</p>}

        {props.humidity && <p>Humidity: {props.humidity}%</p>}

        {props.description && <p>Conditions: {props.description}</p>}

        {props.icon && <img src={props.icon} alt=""></img>}

        {props.error && <p>{props.error}</p>}
    </div >
);

export default Weather;