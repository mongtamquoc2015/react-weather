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
