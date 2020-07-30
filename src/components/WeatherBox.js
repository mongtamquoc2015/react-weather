<<<<<<< HEAD
import React, { Component } from 'react'

export default class WeatherBox extends Component {
	render() {
		return (
			<div className="weather-box">
				<div className="temp">15C</div>
				<div className="weather">Sunny</div>
			</div>
		)
	}
}
=======
import React from 'react';
import PropTypes from 'prop-types';


export default function WeatherBox(props) {
	const _weather = props.weather;
	return (
		<div>	
			<div className="weather-box">
				<div className="temp"> {Math.round(_weather.main.temp)}°C </div>
				<div className="weather"> {_weather.weather[0].main} </div>
			</div>
		</div>
	)
}

WeatherBox.propTypes = {
	weather: PropTypes.string.isRequired,
}
>>>>>>> 668a266973a50df5f6ce37096844d9b11954dd3e
