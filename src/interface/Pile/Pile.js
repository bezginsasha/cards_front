import React from 'react'
import { useDispatch } from "react-redux";
import { setPile } from '../../state/currentPileSlice'
import './Pile.css'

function Pile(props) {
	var dispatch = useDispatch();
	var className = 'pile';
	if (props.currentPile === props.name) {
		className += ' pile-selected'
	}

	function pileClickHandler(event) {
		dispatch(setPile(event.target.value));
	}

	return (
		<input
			type="button"
			onClick={ pileClickHandler }
			className={ className }
			value={ props.name }
		/>
	)
}

export default Pile;
