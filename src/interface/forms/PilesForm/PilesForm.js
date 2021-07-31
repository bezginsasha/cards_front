import { useSelector, useDispatch } from 'react-redux'
import './PilesForm.css'
import OverForm from '../OverForm'
import PilesFormRow from './PilesFormRow'
import { deletePile, updatePile } from '../../../state/pilesSlice'

function PilesForm(props) {
	var dispatch = useDispatch();
	var piles = useSelector(state => state.piles);

	function deletePileHandler(pileName) {
		dispatch(deletePile(pileName));
	}

	function updatePileHandler(oldName, newName) {
		dispatch(updatePile({
			oldName: oldName,
			newName: newName
		}))
	}

	var pilesElements = piles.map(pile => (
		<PilesFormRow
			name={ pile }
			deletePileHandler={ deletePileHandler }
			updatePileHandler={ updatePileHandler }
		/>
	));

	return (
		<OverForm>
			<p>{ props.title }</p>
			{ pilesElements }
			<input type="button" value="Add new" className="piles-form-button" />
		</OverForm>
	);
}

export default PilesForm
