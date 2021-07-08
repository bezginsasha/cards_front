import React from 'react';
import './index.css';

import Search from './Search';
import HeaderButton from './HeaderButton';
import WordListItem from './WordListItem';
import OverContainer from './OverContainer';

import NewWordForm from './forms/NewWordForm';
import AccountForm from './forms/AccountForm';
import GameForm from './forms/GameForm';
import HelpForm from './forms/HelpForm';

export const FORMS = {
	newWord: 'New word',
	game: 'Game',
	piles: 'Piles',
	help: 'Help',
	import: 'Import',
	account: 'Account',
	none: 'None',
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentForm: FORMS.none
		};
	}

	headerButtonHandler = (event, form) => {
		this.setState({
			currentForm: form
		})
	}

	render() {
		return(
			<React.Fragment>
				<section className="header" >
					<HeaderButton form={ FORMS.newWord } handler={ this.headerButtonHandler } />
					<HeaderButton form={ FORMS.game } handler={ this.headerButtonHandler } />
					<HeaderButton form={ FORMS.piles } handler={ this.headerButtonHandler } />
					<HeaderButton form={ FORMS.help } handler={ this.headerButtonHandler } />
					<HeaderButton form={ FORMS.import } handler={ this.headerButtonHandler } />
					<HeaderButton form={ FORMS.account } handler={ this.headerButtonHandler } />
				</section>
				<hr />
				<Search />
				<WordListItem wordValue="Word" />
				<WordListItem wordValue="School" />
				<WordListItem wordValue="Magic" />

				{ getJSXFormByName(this.state.currentForm) }
			</React.Fragment>
		)
	}
}

function getJSXFormByName(form) {
		var currentForm;

		switch (form) {
			case FORMS.newWord:
				currentForm = <NewWordForm />
				break;
			case FORMS.game:
				currentForm = <GameForm />
				break;
			case FORMS.account:
				currentForm = <AccountForm />
				break;
			case FORMS.help:
				currentForm = <HelpForm />
				break;
			default:
				currentForm = null
		}

		if (currentForm) {
			currentForm = (
				<OverContainer>
					{ currentForm }
				</OverContainer>
			);
		}

		return currentForm;
}

export default App
