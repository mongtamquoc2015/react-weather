<<<<<<< HEAD
import React from 'react'

export default function LocationBox() {
=======
import React from 'react';
import PropTypes from 'prop-types';

export default function LocationBox(props) {
>>>>>>> 668a266973a50df5f6ce37096844d9b11954dd3e
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
<<<<<<< HEAD


	}
	return (
		<div className="location-box">
			<div className="location">Hue, Vietname</div>
			<div className="date"> {dateBuilder(new Date())} </div>
		</div>
	)
}
=======
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
>>>>>>> 668a266973a50df5f6ce37096844d9b11954dd3e
