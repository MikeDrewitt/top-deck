import axios from 'axios';
export const FETCH_FLIGHT = 'FETCH_FLIGHT';

axios.get('https://api.deckbrew.com/mtg/cards/typeahead?q=ezuri').then(function(result) { 
	YourAction.getCard(result)
});

export function getCard(request) {
	console.log(request);
	return {
		type: GET_CARD,
		payload: request
	};
}

