import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './index.css';

import Search from './Search';
import HeaderButton from './HeaderButton';
import WordList from './WordList';
import OverContainer from './OverContainer';
import Pipe from './Pipe'

import NewWordForm from './forms/NewWordForm';
import AccountForm from './forms/AccountForm';
import GameForm from './forms/GameForm';
import HelpForm from './forms/HelpForm';

import { initiateCards } from './features/cards/cardsSlice'

export const FORMS = {
	newWord: 'New word',
	game: 'Game',
	piles: 'Piles',
	help: 'Help',
	import: 'Import',
	account: 'Account',
	none: 'None',
};

function App() {
    var [ currentForm, setCurrentForm ] = useState(FORMS.none);
    var [ cards, setCards ] = useState(null);

    var dispatch = useDispatch();

	function headerButtonHandler(event, form) {
	    setCurrentForm(form);
	}

	function overContainerClickHandler(event) {
	    setCurrentForm(FORMS.none);
	}

	function closeForm() {
	    setCurrentForm(FORMS.none);
	}

	useEffect(() => {
        fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
                Origin: 'http://localhost:3000'
            },
        })
        .then(
            response => response.json().then(
                data => dispatch(initiateCards(data))
            )
        );
	}, []);

	console.log(cards);
	
	var currentFormElement = null;
	
    switch (currentForm) {
        case FORMS.newWord:
            currentFormElement = <NewWordForm closeForm={ closeForm } />;
            break;
        case FORMS.game:
            currentFormElement = <GameForm />;
            break;
        case FORMS.account:
            currentFormElement = <AccountForm />;
            break;
        case FORMS.help:
            currentFormElement = <HelpForm />;
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

	return (
        <React.Fragment>
            <section className="header" >
                <HeaderButton form={ FORMS.newWord } handler={ headerButtonHandler } />
                <HeaderButton form={ FORMS.game } handler={ headerButtonHandler } />
                <HeaderButton form={ FORMS.piles } handler={ headerButtonHandler } />
                <HeaderButton form={ FORMS.help } handler={ headerButtonHandler } />
                <HeaderButton form={ FORMS.import } handler={ headerButtonHandler } />
                <HeaderButton form={ FORMS.account } handler={ headerButtonHandler } />
            </section>
            <hr />
            <Search />
            <Pipe value="test pipe" />
            <WordList cards={ cards } />
            { currentFormElement }
        </React.Fragment>
    )
}

export default App
