import React from 'react';

const Weather = props => (
    <div>
        {props.date && <p>Date: {props.date}</p>}

        {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}

        {props.temperature && <p>Temperature: {props.temperature}℉</p>}

        {props.feels_like && <p>Feels Like: {props.feels_like}℉</p>}

        {props.humidity && <p>Humidity: {props.humidity}%</p>}

        {props.description && <p>Conditions: {props.description}</p>}

        {props.icon && <img src={props.icon} alt=""></img>}

        {props.error && <p>{props.error}</p>}
    </div >
);

export default Weather;