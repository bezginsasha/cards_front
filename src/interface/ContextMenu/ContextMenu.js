import './ContextMenu.css'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../../state/cards/cardsSlice'

function ContextMenu(props) {
	var dispatch = useDispatch();

	function deleteWord() {
		dispatch(deleteCard(props.wordId));
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