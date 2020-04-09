import React from 'react';
import axios from 'axios';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


// const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${city},${country}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&zip=${zip_code}`;

class App extends React.Component {
    // in react v16 constructor() & super() has been depricated 
    state = {
        date: undefined,
        temperature: undefined,
        feels_like: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        city: undefined,
        country: undefined,
        error: undefined
    }

    // in react v16 use of arrow function allows to access this.object without binding it
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const zip_code = e.target.elements.zip_code.value;
        const country = e.target.elements.country.value;
        try {

            const api_call = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${city},${country}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&zip=${zip_code}`);
            console.log(api_call.data.list);

            const dateList = api_call.data.list.map((date) => [date.dt_txt]);
            const tempList = api_call.data.list.map((temp) => [temp.main.temp]);
            const feelsLikeList = api_call.data.list.map((feelsLike) => [feelsLike.main.feels_like]);
            const humidityList = api_call.data.list.map((humidity) => [humidity.main.humidity]);
            const descriptionList = api_call.data.list.map((description) => [description.weather[0].description]);
            const iconList = api_call.data.list.map((icon) => [icon.weather[0].icon]);

            this.setState({ date: dateList, temperature: tempList, feels_like: feelsLikeList, humidity: humidityList, description: descriptionList, icon: iconList, city: api_call.data.city.name, country: api_call.data.city.country });

            console.log(this.state.date, 'Date');
            console.log(this.state.temperature, 'Termperature');
            console.log(this.state.feels_like, 'Feels Like');
            console.log(this.state.humidity, 'Humidity');
            console.log(this.state.description, 'Description');
            console.log(this.state.icon, 'Icon');
            console.log(this.state.city, 'City');
            console.log(this.state.country, 'Country');

        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather />
            </div>
        );
    }
};

export default App;

/*
Pseudocode:
* Create components;
* Create Wireframe;
* Obtain and hide API key;
* install axios;
*/