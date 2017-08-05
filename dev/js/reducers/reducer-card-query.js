import { FETCH_FLIGHT } from '../actions/index';

export default function(state=null, action) {
	switch (action.type) {
		case FETCH_FLIGHT:
			console.log(action)
			return action.payload.name;
	}
	return state;
}
