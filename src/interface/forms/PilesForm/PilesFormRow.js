import './PilesForm.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePile, updatePile, insertPile } from '../../../state/pilesSlice'
import request from '../../../util/request'

function PilesFormRow(props) {
	var [ pileName, setPileName ] = useState(props.name);
	var dispatch = useDispatch();

	function inputHandler(event) {
		setPileName(event.target.value);
	}

	function deleteClickHandler(event) {
		dispatch(deletePile(props.name));

		var form = new FormData();
		form.set('pile_name', pileName);

		request({
			url: 'piles/delete',
			method: 'POST',
			body: form,
			callback: data => console.log(data)
		})
	}

	function updateClickHandler(event) {
		if (props.hideNewPileRow) {
			props.hideNewPileRow();
		}

		if (props.name) {
			dispatch(updatePile({
				oldName: props.name,
				newName: pileName
			}));
		} else {
			dispatch(insertPile(pileName));

			var form = new FormData();
			form.set('pile_name', pileName);

			request({
				url: 'piles/add',
				method: 'POST',
				body: form,
				callback: (data) => console.log(data)
			});
		}
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
