import * as siteActions from '../constants/actionTypes';
import initialState from './initialState';

export default function siteReducer(state = initialState.site, action) {
  switch (action.type) {
    case siteActions.SHOW_LOADER:
    case siteActions.HIDE_LOADER:
      return Object.assign({}, {showLoader: action.value});

    default:
      return state;
  }
}