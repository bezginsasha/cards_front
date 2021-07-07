import React from 'react';
import './Search.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	inputHandler = (event) => {
		event.preventDefault();
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
			<input type="text" className="search" placeholder="Search" value={ this.state.value } onInput={ this.inputHandler } />
		);
	}
}

export default Search;
