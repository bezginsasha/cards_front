import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';

import Search from '../interface/Search/Search';
import HeaderButton from '../interface/HeaderButton/HeaderButton';
import CardList from '../interface/CardList/CardList';
import OverContainer from '../interface/OverContainer/OverContainer';
import Pile from '../interface/Pile/Pile'

import NewCardForm from '../interface/forms/NewCardForm';
import UpdateCardForm from '../interface/forms/UpdateCardForm';
import PilesForm from '../interface/forms/PilesForm/PilesForm'
import AccountForm from '../interface/forms/AccountForm';
import GameForm from '../interface/forms/GameForm';
import HelpForm from '../interface/forms/HelpForm';
import ImportForm from '../interface/forms/ImportForm';

import { ALL_CARDS_PILE, FORMS } from '../util/constants';
import updateCardsAndPiles from "../util/updateCardsAndPiles";
import setCurrentUserFromCookies from "../util/setCurrentUserFromCookies";

function App() {
	var [ currentForm, setCurrentForm ] = useState(FORMS.none);
	var [ cardIdForUpdate, setCardIdForUpdate ] = useState('');
	var [ searchFilter, setSearchFilter ] = useState('');
	var dispatch = useDispatch();
	var piles = useSelector(state => state.piles);
	var currentPile = useSelector(state => state.currentPile.pileName );

	var cards = useSelector(state => state.cards);
	cards = cards.filter(card => card.pileName === currentPile || currentPile === ALL_CARDS_PILE);
	var reg = new RegExp('.*' + searchFilter + '.*', 'i');
	cards = cards.filter(card => reg.test(card.originalWord) );

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

	function setFilter(filter) {
		setSearchFilter(filter);
	}

	useEffect(() => {
		updateCardsAndPiles(dispatch);
		setCurrentUserFromCookies(dispatch);
		document.addEventListener('keyup', event => {
			if (event.key === 'Escape')
				closeForm();
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
			currentFormElement = <AccountForm title={ FORMS.account } closeForm={ closeForm } />;
			break;
		case FORMS.help:
			currentFormElement = <HelpForm title={ FORMS.help } />;
			break;
		case FORMS.import:
			currentFormElement = <ImportForm title={ FORMS.import } closeForm={ closeForm } />;
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

	var pilesElements = [ALL_CARDS_PILE].concat(piles).map(pile =>
			<Pile
				name={ pile }
				key={ pile }
				currentPile={ currentPile }
			/>
		);

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
			<Search filterCards={ setFilter } />
			{ pilesElements }
			<CardList cards={ cards } showUpdateCardForm={ showUpdateCardForm } />
			{ currentFormElement }
		</React.Fragment>
	)
}

export default App
