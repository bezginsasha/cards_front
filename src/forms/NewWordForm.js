import React from 'react';
import './CommonForm.css';
import OverForm from './OverForm'

class NewWordForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    originalWord: '',
		    translatedWord: ''
		}
	}
	}

	originalWordInputHandler = (event) => {
	    this.setState({
	        originalWord: event.target.value
	    })
	};

	translatedWordInputHandler = (event) => {
	    this.setState({
	        tranlatedValue: event.target.value
	    })
	};

	render() {
		return (
			<OverForm>
				<p>New word</p>
				<textarea
				    onInput={ this.originalWordInputHandler }
				    value={ this.state.originalWord }
				    className="over-input-textarea"
				    placeholder="Original word"
				    rows="3"
				/>
                <br/>
				<textarea
				    onInput={ this.translatedWordInputHandler }
				    value={ this.state.tranlatedValue }
                    className="over-input-textarea"
                    placeholder="Translated word with context"
				    rows="3"
				/>
				<br />
				<input type="button" value="Save" className="over-form-button" />
			</OverForm>
		);
	}
}

export default NewWordForm;
