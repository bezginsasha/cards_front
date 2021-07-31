import OverForm from './OverForm'
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateCard } from '../../state/cards/cardsSlice'
import request from "../../util/request";

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
		if (!originalWord || !translatedWord)
			return;

		var form = new FormData();
		form.set('id', props.cardId);
		form.set('original_word', originalWord);
		form.set('translated_word', translatedWord);

		request({
			url: 'update',
			method: 'POST',
			body: form,
			callback: data => {
				console.log(data);
				var card = {
					id: props.cardId,
					original_word: originalWord,
					translated_word: translatedWord
				};

				// console.log(card);

				dispatch(updateCard(card));
			}
		});
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
