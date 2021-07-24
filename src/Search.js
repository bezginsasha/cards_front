import React, { useState } from 'react';
import './Search.css';

function Search() {
	var [ value, setValue ] = useState('');

	function inputHandler(event) {
		event.preventDefault();
		setValue(event.target.value);
	}

	return (
		<input type="text" className="search" placeholder="Search" value={ value } onInput={ inputHandler } />
	);
}

export default Search;
