import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './CommonForm.css';
import OverForm from './OverForm';
import request from '../../util/request'
import setCurrentUserFromCookies from '../../util/setCurrentUserFromCookies'

function AccountForm(props) {
	var [ username, setUsername ] = useState('');
	var [ password, setPassword ] = useState('');
	var [ warning, setWarning] = useState('');
	var dispatch = useDispatch();

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
					setWarning(data.result);
				} else {
					setCurrentUserFromCookies(dispatch);
					setWarning('');
					props.closeForm();
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
					setWarning(data.result);
				} else {
					setCurrentUserFromCookies(dispatch);
					setWarning('');
					props.closeForm();
				}
			}
		});
	}

	var currentUser = useSelector(state => state.currentUser.name );
	if (currentUser) {
		currentUser = ' (' + currentUser + ')';
	}

	var displayWarning = warning;
	if (displayWarning) {
		displayWarning = <p className="warning" >{ displayWarning }</p>
	}

	return (
		<OverForm>
			<p>{ props.title }{ currentUser }</p>
			{ displayWarning }
			<input
				type="text"
				value={ username }
				onChange={ usernameInputHandler }
				className="over-form-input"
				placeholder="Username"
				autoFocus={ true }
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
