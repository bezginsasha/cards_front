import './ContextMenu.css'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../../state/cardsSlice'
import request from "../../util/request";

function ContextMenu(props) {
	var dispatch = useDispatch();

	function deleteCardHandler() {
		var form = new FormData();
		form.set('id', props.card.id);

		request({
			url: 'cards/delete',
			method: 'POST',
			body: form,
			callback: data => {
				console.log(data);
				dispatch(deleteCard(props.card.id));
			}
		});
	}

	function showUpdateCardFormClick(event) {
		props.showUpdateCardForm(props.card.id);
	}

	return (
		<div className="context-menu" style={ { left: props.left - 10 } }>
			<input
				type="button"
				onClick={ showUpdateCardFormClick }
				value="edit"
				className="context-menu-button"
			/>
			<input
				type="button"
				onClick={ deleteCardHandler }
				value="delete"
				className="context-menu-button"
			/>
		</div>
	)
}

export default ContextMenu
