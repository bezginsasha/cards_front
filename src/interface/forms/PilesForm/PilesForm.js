import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './PilesForm.css'
import OverForm from '../OverForm'
import PilesFormRow from './PilesFormRow'
import { deletePile, updateOrInsertPile } from '../../../state/pilesSlice'

function PilesForm(props) {
	var dispatch = useDispatch();
	var piles = useSelector(state => state.piles);
	var [ showEmptyInput, setShowEmptyInput ] = useState(false);

	function deletePileHandler(pileName) {
		dispatch(deletePile(pileName));
	}

	function updatePileHandler(oldName, newName) {
		dispatch(updateOrInsertPile({
			oldName: oldName,
			newName: newName
		}))
	}

	function addNewPileHandler(event) {
		setShowEmptyInput(true);
	}

	var pilesElements = piles.map(pile => (
		<PilesFormRow
			name={ pile }
			deletePileHandler={ deletePileHandler }
			updatePileHandler={ updatePileHandler }
		/>
	));

	if (showEmptyInput) {
		pilesElements.push(
			<PilesFormRow
				name=""
				deletePileHandler={ deletePileHandler }
				updatePileHandler={ updatePileHandler }
			/>
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
