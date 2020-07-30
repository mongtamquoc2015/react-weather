import React, { Component } from 'react'

export default class SearchBox extends Component {
	render() {
		return (
			<div className="search-box">
				<input
					type="text"
					className="search-bar"
					placeholder="Search..."
				/>
			</div>
		)
	}
}
