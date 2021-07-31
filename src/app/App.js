import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';

import Search from '../interface/Search/Search';
import HeaderButton from '../interface/HeaderButton/HeaderButton';
import CardList from '../interface/WordList/CardList';
import OverContainer from '../interface/OverContainer/OverContainer';
import Pile from '../Pile'

import NewCardForm from '../interface/forms/NewCardForm';
import UpdateCardForm from '../interface/forms/UpdateCardForm';
import PilesForm from '../interface/forms/PilesForm/PilesForm'
import AccountForm from '../interface/forms/AccountForm';
import GameForm from '../interface/forms/GameForm';
import HelpForm from '../interface/forms/HelpForm';

import { initiateCards } from '../state/cardsSlice'
import request from "../util/request";

export const FORMS = {
	newCard: 'New card',
	updateCard: 'Updating card',
	game: 'Game',
	piles: 'Piles',
	help: 'Help',
	import: 'Import',
	account: 'Account',
	none: 'None',
};

function App() {
	var [ currentForm, setCurrentForm ] = useState(FORMS.none);
	var [ cardIdForUpdate, setCardIdForUpdate ] = useState('');
	var dispatch = useDispatch();
	var cards = useSelector(state => state.cards);
	var piles = useSelector(state => state.piles);

	function headerButtonHandler(event, form) {
		setCurrentForm(form);
	}

	function showUpdateCardForm(cardId) {
		setCurrentForm(FORMS.updateCard);
		setCardIdForUpdate(cardId);
	}

	function overContainerClickHandler(event) {
		setCurrentForm(FORMS.none);
	}

	function closeForm() {
		setCurrentForm(FORMS.none);
	}

	useEffect(() => {
		request({
			url: 'get_all',
			callback: data => dispatch(initiateCards(data))
		});
	}, []);

	var currentFormElement = null;
	
	switch (currentForm) {
		case FORMS.newCard:
			currentFormElement = <NewCardForm title={ FORMS.newCard } closeForm={ closeForm } />;
			break;
		case FORMS.updateCard:
			currentFormElement = <UpdateCardForm title={ FORMS.updateCard } closeForm={ closeForm } cardId={ cardIdForUpdate } />;
			break;
		case FORMS.game:
			currentFormElement = <GameForm title={ FORMS.game } />;
			break;
		case FORMS.piles:
			currentFormElement = <PilesForm title={ FORMS.piles } />;
			break;
		case FORMS.account:
			currentFormElement = <AccountForm title={ FORMS.account } />;
			break;
		case FORMS.help:
			currentFormElement = <HelpForm title={ FORMS.help } />;
			break;
		default:
			currentFormElement = null
	}
	
	if (currentFormElement) {
		currentFormElement = (
			<OverContainer clickHandler={ overContainerClickHandler } >
				{ currentFormElement }
			</OverContainer>
		);
	}

	var pilesElements = piles.map(pile => <Pile value={ pile } />);

	return (
		<React.Fragment>
			<section className="header" >
				<HeaderButton form={ FORMS.newCard } handler={ headerButtonHandler } />
				<HeaderButton form={ FORMS.game } handler={ headerButtonHandler } />
				<HeaderButton form={ FORMS.piles } handler={ headerButtonHandler } />
				<HeaderButton form={ FORMS.help } handler={ headerButtonHandler } />
				<HeaderButton form={ FORMS.import } handler={ headerButtonHandler } />
				<HeaderButton form={ FORMS.account } handler={ headerButtonHandler } />
			</section>
			<hr />
			<Search />
			{ pilesElements }
			<CardList cards={ cards } showUpdateCardForm={ showUpdateCardForm } />
			{ currentFormElement }
		</React.Fragment>
	)
}

export default App
