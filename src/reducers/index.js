import {LOGIN, INITIAL_LOGIN, DATA, ERROR, CLEAR_ERROR} from '../action';

const initialState = {
	login: false,
	user: null,
	error: null,
	form: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				form: {...action.user},
				login: true,
				error: null,
			};
		case INITIAL_LOGIN:
			return {
				...state,
				login: false,
				error: null,
			};
		case DATA:
			return {
				...state,
				user: action.data,
				login: true,
				error: null,
			};
		case ERROR:
			return {
				...state,
				error: action.message,
				form: null,
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			}
		default:
			console.log('__ default RRR');
			return state;
	}
}