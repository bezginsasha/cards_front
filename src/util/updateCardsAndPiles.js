import request from "./request";
import {initiateCards} from "../state/cardsSlice";
import {initiatePiles} from "../state/pilesSlice";

function updateCardsAndPiles(dispatch) {
	request({
		url: 'cards/get_all',
		callback: data => dispatch(initiateCards(data))
	});
	request({
		url: 'piles/get_all',
		callback: data => dispatch(initiatePiles(data))
	});
}

export default updateCardsAndPiles
