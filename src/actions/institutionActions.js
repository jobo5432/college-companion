import InstitutionApi from '../api/mockInstitutionApi';
//import InstitutionApi from '../api/institutionApi';

import {institutionActions} from '../constants/actionTypes';

export function loadInstitutionsSuccess(institutions) {

  return {type: institutionActions.GET_ALL_INSTITUTIONS_SUCCESS, institutions: institutions};
}

export function loadInstitutionsError(error) {
  return {type: institutionActions.GET_ALL_INSTITUTIONS_ERROR, error: error};
}

export function goToInstitutionSuccess(institution){
  return {type: institutionActions.GO_TO_INSTITUTION_SUCCESS, institution: institution};
}

/* THUNKS */
export function loadInstitutions() {
  return dispatch => {
    return InstitutionApi.getAllInistitutions().then(institutions => {
      console.log(institutions);
      dispatch(loadInstitutionsSuccess(institutions));
    }).catch(error => {
      dispatch(loadInstitutionsError(error));
    });
  };
}

export function goToInstitution(institution){
  return dispatch => {
    alert("We're going to " + institution.label);
    dispatch(goToInstitutionSuccess(institution));
  };
}