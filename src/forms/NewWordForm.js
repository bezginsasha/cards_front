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

	submitHandler = () => {
		var form = new FormData();
		form.set('original_word', this.state.originalWord);
		form.set('translated_word', this.state.translatedWord);

        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                Origin: 'http://localhost:3000/'
            },
            body: form
        })
        .then(
            response => response.json().then(
                data => console.log(data)
            )
        );

		this.props.closeForm();
	};

	originalWordInputHandler = (event) => {
	    this.setState({
	        originalWord: event.target.value
	    })
	};

	translatedWordInputHandler = (event) => {
	    this.setState({
	        translatedWord: event.target.value
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
				<input
				    onClick={ this.submitHandler }
				    type="button"
				    value="Save"
				    className="over-form-button"
                />
			</OverForm>
		);
	}
}

export default NewWordForm;
