import './ContextMenu.css'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../../state/cards/cardsSlice'
import request from "../../util/request";

function ContextMenu(props) {
	var dispatch = useDispatch();

	function deleteWord() {
		var form = new FormData();
		form.set('id', props.wordId);

		request({
			url: 'delete',
			method: 'POST',
			body: form,
			callback: data => {
				console.log(data);
				dispatch(deleteCard(props.wordId));
			}
		});
	}

	return (
		<div className="context-menu" style={ {left: props.left} }>
			<input
				type="button"
				value="edit"
				className="context-menu-button"
			/>
			<input
				type="button"
				onClick={ deleteWord }
				value="delete"
				className="context-menu-button"
			/>
		</div>
	)
}

export default ContextMenu