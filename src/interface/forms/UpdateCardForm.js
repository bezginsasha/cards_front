import OverForm from './OverForm'
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateCard } from '../../state/cardsSlice'
import request from "../../util/request";
import makeMarkDown from "../../util/makeMarkDown";

function UpdateCardForm(props) {
	var dispatch = useDispatch();
	var card = useSelector(state => state.cards.find(card => card.id === props.cardId));
	var [ originalWord, setOriginalWord ] = useState(card.originalWord);
	var [ translatedWord, setTranslatedWord ] = useState(card.translatedWord);
	var [ render, setRender ] = useState(false);

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
		form.set('originalWord', originalWord);
		form.set('translatedWord', translatedWord);

		request({
			url: 'cards/update',
			method: 'POST',
			body: form,
			callback: data => {
				if (data.result === 'ok') {
					var card = {
						id: props.cardId,
						originalWord: originalWord,
						translatedWord: translatedWord
					};
					dispatch(updateCard(card));
					props.closeForm();
				} else {
					alert(data.result);
				}
			}
		});
	}

	function changeRenderButtonState() {
		setRender(!render);
	}

	var translatedWordElement = render ? (
		<div
			dangerouslySetInnerHTML={ makeMarkDown(translatedWord) }
			className="over-input-textarea"
		/>
	) : (
		<textarea
			onInput={ translatedWordInputHandler }
			value={ translatedWord }
			className="over-input-textarea"
			placeholder="Translated word with context"
			rows="3"
		/>
	);

	return (
		<OverForm>
			<p>{ props.title }</p>
			<textarea
				onInput={ originalWordInputHandler }
				value={ originalWord }
				className="over-input-textarea"
				placeholder="Original word"
				rows="3"
				autoFocus={ true }
			/>
			{ translatedWordElement }
			<input
				onClick={ submitHandler }
				type="button"
				value="Save"
				className="over-form-button"
			/>
			<input
				type="button"
				value={ render ? 'Edit' : 'Render' }
				onClick={ changeRenderButtonState }
				className="over-form-button"
			/>
		</OverForm>
	);
}

export default UpdateCardForm
