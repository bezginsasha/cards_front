import React from 'react';
import './CommonForm.css';
import OverForm from './OverForm';

function AccountForm(props) {
	return (
		<OverForm>
			<p>{ props.title }</p>
			<input type="text" className="over-form-input" placeholder="Username" />
			<input type="text" className="over-form-input" placeholder="Password" />
			<br />
			<input type="button" value="Sign In" className="over-form-button" />
			<input type="button" value="Sign Up" className="over-form-button" />
		</OverForm>
	);
}

export default AccountForm;
