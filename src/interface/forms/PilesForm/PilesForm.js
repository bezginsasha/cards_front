import { useState } from 'react'
import { useSelector } from 'react-redux'
import './PilesForm.css'
import OverForm from '../OverForm'
import PilesFormRow from './PilesFormRow'

function PilesForm(props) {
	var piles = useSelector(state => state.piles);
	var [ showEmptyInput, setShowEmptyInput ] = useState(false);

	function addNewPileHandler(event) {
		setShowEmptyInput(true);
	}

	function hideNewPileRow() {
		setShowEmptyInput(false);
	}

	var pilesElements = piles.map(pile => (
		<PilesFormRow name={ pile } key={ pile } />
	));

	if (showEmptyInput) {
		pilesElements.push(
			<PilesFormRow name="" hideNewPileRow={ hideNewPileRow } />
		);
	}

	return (
		<OverForm>
			<p>{ props.title }</p>
			{ pilesElements }
			<input
				type="button"
				value="Add new"
				onClick={ addNewPileHandler }
				className="piles-form-button"
			/>
		</OverForm>
	);
}

export default PilesForm
