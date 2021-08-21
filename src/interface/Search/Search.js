import React, { useState } from 'react';
import './Search.css';

function Search(props) {
	var [ value, setValue ] = useState('');

	function inputHandler(event) {
		var value = event.target.value;
		setValue(value);
		props.filterCards(value);
	}

	return (
		<input
			type="text"
			className="search"
			placeholder="Search"
			value={ value }
			onInput={ inputHandler }
		/>
	);
}

export default Search;
