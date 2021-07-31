import './PilesForm.css'

function PilesFormRow(props) {
	return (
		<div className="piles-form-row" >
			<input
				type="text"
				value={ props.name }
				className="piles-form-input"
			/>
			<input
				type="button"
				value="save"
				className="piles-form-button"
			/>
			<input
				type="button"
				value="delete"
				className="piles-form-button"
			/>
		</div>
	)
}

export default PilesFormRow
