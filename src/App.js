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
	}

	render() {
		return(
			<React.Fragment>
				<section className="header" >
					<HeaderButton buttonValue="New word" />
					<HeaderButton buttonValue="Game" />
					<HeaderButton buttonValue="Piles" />
					<HeaderButton buttonValue="Help" />
					<HeaderButton buttonValue="Import" />
					<HeaderButton buttonValue="Account" />
				</section>
				<hr />
				<Search />
				<WordListItem wordValue="Word" />
				<WordListItem wordValue="School" />
				<WordListItem wordValue="Magic" />

				<OverContainer>
					<HelpForm />
				</OverContainer>
			</React.Fragment>
		)
	}
}

export default App
