import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import LocationBox from './components/LocationBox';
import WeatherBox from './components/WeatherBox';


const api = {
	key: '087984883d47b17d25750cfd36d99fff',
	url: 'https://api.openweathermap.org/data/2.5/'
};


function App() {

	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState('');

	const search = (event) => {
		if (event.key === "Enter") {
			fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
				.then(res => res.json())
				.then(result => {
					setWeather(result);
					console.log(result);
					setQuery('');
				})
		}
	}

	return (
		<div className="app warm">
			<main>
				<SearchBox setQuery={setQuery} query={query} search={search} />
				<LocationBox weather={weather} />
				<WeatherBox />
			</main>
		</div>
	);
}

export default App;
