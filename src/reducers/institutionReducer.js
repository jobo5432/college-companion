import * as institutionActions from '../constants/actionTypes';

export default function institutionReducer(state = [], action) {
  switch (action.type) {
    case institutionActions.INSTITUTIONS_GET_ALL_SUCCESS:
      return action.institutions;

    case institutionActions.INSTITUTION_GET_SUCCESS:
      return action.institution;

    default:
      return state;
  }
}