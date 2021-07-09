import React from 'react';
import './CommonForm.css';

class GameForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="over-form">
				<p>Game</p>
				<p>kunteynir</p>
				<input type="button" value="Easy" className="over-form-button" />
				<input type="button" value="Show" className="over-form-button" />
				<input type="button" value="Hard" className="over-form-button" />
			</div>
		);
	}
}

export default GameForm;
