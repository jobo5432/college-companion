import * as siteActions from '../constants/actionTypes';

export function toggleLoader(action, value) {
  return {type: action, value};
}

/* THUNKS */
export function showLoader() {
  return dispatch => {
    dispatch(toggleLoader(siteActions.SHOW_LOADER, true));
  };
}

export function hideLoader() {
  return dispatch => {
    dispatch(toggleLoader(siteActions.HIDE_LOADER, false));
  };
}