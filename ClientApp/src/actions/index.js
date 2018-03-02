import 'action-types'
import { ACTIVATE_TAB } from './action-types';

export const activateTab = () => (
	{
		type: ACTIVATE_TAB,
		payload: {name: "ambience"}
	}
)

