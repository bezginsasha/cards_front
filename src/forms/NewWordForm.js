import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import './CommonForm.css';
import OverForm from './OverForm'

import { insertCard } from '../features/cards/cardsSlice'

function NewWordForm(props) {
	var [ originalWord, setOriginalWord ] = useState('');
	var [ translatedWord, setTranslatedWord ] = useState('');
	var dispatch = useDispatch();

	function submitHandler() {
		if (!originalWord || !translatedWord)
			return;

		var form = new FormData();
		form.set('original_word', originalWord);
		form.set('translated_word', translatedWord);

		fetch('http://localhost:5000/add', {
			method: 'POST',
			headers: {
				Origin: 'http://localhost:3000/'
			},
			body: form
		})
		.then(
			response => response.json().then(
				data => {
					console.log(data.id);
					var card = {
						id: data.id,
						original_word: originalWord,
						translated_word: translatedWord
					};

					dispatch(insertCard(card));
				}
			)
		);

		props.closeForm();
	}

	function originalWordInputHandler(event) {
		setOriginalWord(event.target.value);
	}

	function translatedWordInputHandler(event) {
		setTranslatedWord(event.target.value);
	}

	return (
		<OverForm>
			<p>New word</p>
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

export default NewWordForm;
