import request from "./request";
import {initiateCards} from "../state/cardsSlice";
import {initiatePiles} from "../state/pilesSlice";
import { setPile } from "../state/currentPileSlice";
import { ALL_CARDS_PILE } from './constants';

function updateCardsAndPiles(dispatch) {
	request({
		url: 'cards/get_all',
		callback: data => dispatch(initiateCards(data))
	});
	request({
		url: 'piles/get_all',
		callback: data => {
			dispatch(initiatePiles(data));
			dispatch(setPile(ALL_CARDS_PILE));
		}
	});
}

export default updateCardsAndPiles
