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
