import React from 'react';
import './CommonForm.css';
import OverForm from './OverForm'

class NewWordForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<OverForm>
				<p>New word</p>
				<textarea className="over-input-textarea" placeholder="Original word" rows="3"></textarea>
				<textarea className="over-input-textarea" placeholder="Translated word with context" rows="3"></textarea>
				<br />
				<input type="button" value="Save" className="over-form-button" />
			</OverForm>
		);
	}
}

export default NewWordForm;
