import React from 'react';
import './CommonForm.css';
import OverForm from './OverForm';

function GameForm(props) {
	return (
		<OverForm>
			<p>{ props.title }</p>
			<p>kunteynir</p>
			<input type="button" value="Easy" className="over-form-button" />
			<input type="button" value="Show" className="over-form-button" />
			<input type="button" value="Hard" className="over-form-button" />
		</OverForm>
	);
}

export default GameForm;
