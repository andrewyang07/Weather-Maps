import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		// bind our onInputChange to our react object
		// because we didn't direct put this function into our
		// JSX, so when the function is called, the keyword 'this'
		// will refer to another non-react object, so setState won't
		// work
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	// all event handlers come with event as its argument
	onInputChange(event) {		
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		// we need to go and fetch weather data
		this.props.fetchWeather(this.state.term);

		// empty the input
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Ger a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);