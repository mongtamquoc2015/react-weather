import React from 'react';
import PropTypes from 'prop-types';

export default function LocationBox(props) {
	const dateBuilder = (d) => {
		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
			'August', 'September', 'October', 'November', 'December'];
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
			'Saturday'];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`
	}

	const _weather = props.weather;

	return (
		<div className="location-box">
			<div className="location"> {_weather.name}, {_weather.sys.country} </div>
			<div className="date"> {dateBuilder(new Date())} </div>
		</div>
	);

}

LocationBox.propTypes = {
	weather: PropTypes.string.isRequired,
}