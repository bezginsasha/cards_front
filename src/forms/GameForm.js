import React from 'react';
import './CommonForm.css';

class GameForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="over-form">
				<p>Game</p>
				<p>kunteynir</p>
				<input type="button" value="Easy" class="over-form-button" />
				<input type="button" value="Show" class="over-form-button" />
				<input type="button" value="Hard" class="over-form-button" />
			</div>
		);
	}
}

export default GameForm;
