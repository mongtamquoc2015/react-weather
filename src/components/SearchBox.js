import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchBox extends Component {
	render() {
		return (
			<div className="search-box">
				<input
					type="text"
					className="search-bar"
					placeholder="Search..."
					onChange={event => this.props.setQuery(event.target.value)}
					value={this.props.query}
					onKeyPress={this.props.search}
				/>
			</div>
		)
	}
}

SearchBox.propTypes = {
	setQuery: PropTypes.func.isRequired,
	search: PropTypes.func.isRequired,
	query: PropTypes.string.isRequired,
}
