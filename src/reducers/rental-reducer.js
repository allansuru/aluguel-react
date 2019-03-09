import * as types from '../actions/types';

const INITIAL_STATE = {
	data: []
}

export const rentalReducer = (state = INITIAL_STATE, action) => {

	switch(action.type) {
		case types.FETCH_RENTALS:
			return {...state,  data: action.rentals }
			
			default: 
			return state;
	}
}