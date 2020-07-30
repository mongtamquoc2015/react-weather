import React from 'react';
import SearchBox from './components/SearchBox';


const api = {
	key: '087984883d47b17d25750cfd36d99fff',
	url: 'https://api.openweathermap.org/data/2.5/'
};


function App() {
	return (
		<div className="app warm">
			<main>
				<SearchBox />
			</main>
		</div>
	);
}

export default App;
