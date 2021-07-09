import React from 'react';
import './CommonForm.css';

class AccountForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="over-form">
				<p>Account</p>
				<input type="text" className="over-form-input" placeholder="Username" />
				<input type="text" className="over-form-input" placeholder="Password" />
				<br />
				<input type="button" value="Sign In" className="over-form-button" />
				<input type="button" value="Sign Up" className="over-form-button" />
			</div>
		);
	}
}

export default AccountForm;
