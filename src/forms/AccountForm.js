import React from 'react';
import './CommonForm.css';

class AccountForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="over-form">
				<p>Account</p>
				<input type="text" class="over-form-input" placeholder="Username" />
				<input type="text" class="over-form-input" placeholder="Password" />
				<br />
				<input type="button" value="Sign In" class="over-form-button" />
				<input type="button" value="Sign Up" class="over-form-button" />
			</div>
		);
	}
}

export default AccountForm;
