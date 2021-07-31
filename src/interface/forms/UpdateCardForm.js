import OverForm from './OverForm'
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateCard } from '../../state/cards/cardsSlice'

function UpdateCardForm(props) {
	var dispatch = useDispatch();
	var card = useSelector(state => state.cards.find(card => card.id === props.cardId));
	var [ originalWord, setOriginalWord ] = useState(card.original_word);
	var [ translatedWord, setTranslatedWord ] = useState(card.translated_word);


	function originalWordInputHandler(event) {
		setOriginalWord(event.target.value);
	}

	function translatedWordInputHandler(event) {
		setTranslatedWord(event.target.value);
	}

	function submitHandler(event) {
		dispatch(updateCard({
			id: props.cardId,
			originalWord: originalWord,
			translatedWord: translatedWord
		}));
		props.closeForm();
	}

	return (
		<OverForm>
			<p>New card</p>
			<textarea
				onInput={ originalWordInputHandler }
				value={ originalWord }
				className="over-input-textarea"
				placeholder="Original word"
				rows="3"
			/>
			<br/>
			<textarea
				onInput={ translatedWordInputHandler }
				value={ translatedWord }
				className="over-input-textarea"
				placeholder="Translated word with context"
				rows="3"
			/>
			<br />
			<input
				onClick={ submitHandler }
				type="button"
				value="Save"
				className="over-form-button"
			/>
		</OverForm>
	);
}

export default UpdateCardForm
