import React from 'react'
import './Pile.css'

function Pile(props) {
	var className = 'pile';
	if (props.currentPile === props.name) {
		className += ' pile-selected'
	}

	return (
		<input
			type="button"
			className={ className }
			value={ props.name }
		/>
	)
}

export default Pile;
