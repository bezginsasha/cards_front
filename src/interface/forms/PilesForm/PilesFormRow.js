import './PilesForm.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePile, updatePile, insertPile } from '../../../state/pilesSlice'
import { setDefaultPileInCardsWithDeletingPile } from '../../../state/cardsSlice'
import request from '../../../util/request'

function PilesFormRow(props) {
	var [ pileName, setPileName ] = useState(props.name);
	var dispatch = useDispatch();

	function inputHandler(event) {
		setPileName(event.target.value);
	}

	function deleteClickHandler(event) {
		dispatch(deletePile(props.name));
		dispatch(setDefaultPileInCardsWithDeletingPile(props.name));

		var form = new FormData();
		form.set('pileName', pileName);

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

		var form = new FormData();

		if (props.name) {
			var oldPileName = props.name;
			var newPileName = pileName;

			form.set('oldPileName', oldPileName);
			form.set('newPileName', newPileName);

			request({
				url: 'piles/update',
				method: 'POST',
				body: form,
				callback: (data) => date => {
					if (data.result === 'ok') {
						dispatch(updatePile({
							oldName: oldPileName,
							newName: newPileName
						}));
					} else {
						alert(data.result);
					}

				}
			});
		} else {
			form.set('pileName', pileName);

			request({
				url: 'piles/add',
				method: 'POST',
				body: form,
				callback: (data) => date => {
					if (data.result === 'ok') {
						dispatch(insertPile(pileName));
					} else {
						alert(data.result);
					}
				}
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
