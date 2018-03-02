import { ACTIVATE_TAB } from '../actions/action-types';

const initialState = {
	isAmbienceTabOpened: true,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIVATE_TAB:
			return Object.assign({}, state, {
				isAmbienceTabOpened: action.payload.name === "ambience",
			});
		default:
			return state;
	}
};

export default rootReducer;