import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            // <div>Weather Component</div>
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}

                {this.props.date && <p>Date: {this.props.date}</p>}

                {this.props.temperature && <p>Temperature: {this.props.temperature}℉</p>}

                {this.props.feels_like && <p>Feels Like: {this.props.feels_like}℉</p>}

                {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}

                {this.props.description && <p>Conditions: {this.props.description}</p>}

                {this.props.icon && <img src={this.props.icon} alt=""></img>}
            </div >
        );
    }
}

export default Weather;