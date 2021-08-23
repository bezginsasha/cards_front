import './ContextMenu.css'
import { useDispatch, useSelector } from 'react-redux'
import {deleteCard, moveCard} from '../../state/cardsSlice'
import request from "../../util/request";

function ContextMenu(props) {
	var dispatch = useDispatch();

	// construction with [... ] needs because piles is readonly
	var piles = [...useSelector(state => state.piles)];
	var indexPileOfCard = piles.indexOf(props.card.pileName);
	piles.splice(indexPileOfCard, 1);

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

	function moveCardToPile(newPile) {
		var form = new FormData();
		form.set('cardId', props.card.id);
		form.set('pileName', newPile);

		dispatch(moveCard({
			cardId: props.card.id,
			pileName: newPile
		}));

		request({
			url: 'cards/move',
			method: 'POST',
			body: form
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
			{
				piles.map(pile => (
					<input
						type="button"
						onClick={ () => moveCardToPile(pile) }
						value={ 'to ' + pile }
						key={ props.card.id + pile }
						className="context-menu-button"
					/>
				))
			}
		</div>
	)
}

export default ContextMenu
