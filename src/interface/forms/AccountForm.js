import React, { useState } from 'react';
import './CommonForm.css';
import OverForm from './OverForm';
import request from '../../util/request'

function AccountForm(props) {
	var [ username, setUsername ] = useState('');
	var [ password, setPassword ] = useState('');

	function usernameInputHandler(event) {
		setUsername(event.target.value);
	}

	function passwordInputHandler(event) {
		setPassword(event.target.value);
	}

	function registerClickHandler(event) {
		var form = new FormData();
		form.set('username', username);
		form.set('password', password);

		request({
			url: 'auth/register',
			method: 'POST',
			body: form,
			callback: data => {
				if (data.result !== 'ok') {
					alert(data.result);
				}
			}
		});
	}

	function loginClickHandler(event) {
		var form = new FormData();
		form.set('username', username);
		form.set('password', password);

		request({
			url: 'auth/login',
			method: 'POST',
			body: form,
			callback: data => {
				if (data.result !== 'ok') {
					alert(data.result);
				}
			}
		})
	}

	return (
		<OverForm>
			<p>{ props.title }</p>
			<input
				type="text"
				value={ username }
				onChange={ usernameInputHandler }
				className="over-form-input"
				placeholder="Username"
			/>
			<input
				type="text"
				value={ password }
				onChange={ passwordInputHandler }
				className="over-form-input"
				placeholder="Password"
			/>
			<br />
			<input
				type="button"
				value="Login"
				onClick={ loginClickHandler }
				className="over-form-button"
			/>
			<input
				type="button"
				value="Register"
				onClick={ registerClickHandler }
				className="over-form-button"
			/>
		</OverForm>
	);
}

export default AccountForm;
