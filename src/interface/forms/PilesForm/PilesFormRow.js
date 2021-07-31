import './PilesForm.css'
import { useState } from 'react'

function PilesFormRow(props) {
	var [ pileName, setPileName ] = useState(props.name);

	function inputHandler(event) {
		setPileName(event.target.value);
	}

	function deleteClickHandler(event) {
		props.deletePileHandler(props.name)
	}

	function updateClickHandler(event) {
		props.updatePileHandler(props.name, pileName);
	}

	return (
		<div className="piles-form-row" >
			<input
				type="text"
				value={ pileName }
				onChange={ inputHandler }
				className="piles-form-input"
			/>
			<input
				type="button"
				value="save"
				onClick={ updateClickHandler }
				className="piles-form-button"
			/>
			<input
				type="button"
				value="delete"
				onClick={ deleteClickHandler }
				className="piles-form-button"
			/>
		</div>
	)
}

export default PilesFormRow
