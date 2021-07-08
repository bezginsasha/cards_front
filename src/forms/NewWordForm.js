import React from 'react';
import './CommonForm.css';

class NewWordForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="over-form">
				<p>New word</p>
				<textarea class="over-input-textarea" placeholder="Original word" rows="3"></textarea>
				<textarea class="over-input-textarea" placeholder="Translated word with context" rows="3"></textarea>
				<br />
				<input type="button" value="Save" class="over-form-button" />
			</div>
		);
	}
}

export default NewWordForm;
