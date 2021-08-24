import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './CommonForm.css';
import OverForm from './OverForm'
import makeMarkDown from '../../util/makeMarkDown'

import { insertCard } from '../../state/cardsSlice'
import { updateOriginalWord, updateTranslatedWord, clearWords } from '../../state/inputWordsSlice'

import request from '../../util/request'

function NewCardForm(props) {
	var dispatch = useDispatch();
	var originalWord = useSelector(state => state.inputWords.originalWord);
	var translatedWord = useSelector(state => state.inputWords.translatedWord);
	var [ render, setRender ] = useState(false);

	function submitHandler() {
		if (!originalWord || !translatedWord)
			return;

		var form = new FormData();
		form.set('originalWord', originalWord);
		form.set('translatedWord', translatedWord);

		request({
			url: 'cards/add',
			method: 'POST',
			body: form,
			callback: data => {
				console.log(data.id);
				var card = {
					id: data.id,
					originalWord: originalWord,
					translatedWord: translatedWord,
					pileName: 'default'
				};

				dispatch(insertCard(card));
				dispatch(clearWords());
			}
		});

		props.closeForm();
	}

	function originalWordInputHandler(event) {
		dispatch(updateOriginalWord(event.target.value));
	}

	function translatedWordInputHandler(event) {
		dispatch(updateTranslatedWord(event.target.value));
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

export default NewCardForm;
