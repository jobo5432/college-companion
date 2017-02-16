import * as institutionActions from '../constants/actionTypes';
import initialState from './initialState';

export default function institutionReducer(state = initialState.institutions, action) {
  switch (action.type) {
    case institutionActions.INSTITUTIONS_GET_ALL_SUCCESS:
      return action.institutions;

    case institutionActions.INSTITUTION_GET_SUCCESS:
      return action.institution;

    default:
      return state;
  }
}