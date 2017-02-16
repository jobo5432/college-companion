import InstitutionApi from '../api/mockInstitutionApi';
//import InstitutionApi from '../api/institutionApi';

import * as institutionActions from '../constants/actionTypes';

export function loadInstitutionsSuccess(institutions) {
  return {type: institutionActions.INSTITUTIONS_GET_ALL_SUCCESS, institutions: institutions};
}

export function loadInstitutionsError(error) {
  return {type: institutionActions.INSTITUTIONS_GET_ALL_ERROR, error: error};
}

export function loadSingleInstitutionSuccess(institution){
  return {type: institutionActions.INSTITUTION_GET_SUCCESS, institution: institution};
}

export function loadSingleInstitutionError(error){
  return {type: institutionActions.INSTITUTION_GET_ERROR, error: error};
}

/* THUNKS */
export function loadInstitutions() {
  return dispatch => {
    return InstitutionApi.getAllInistitutions().then(institutions => {
      dispatch(loadInstitutionsSuccess(institutions));
    }).catch(error => {
      dispatch(loadInstitutionsError(error));
    });
  };
}

export function getInstitution(id){
  return dispatch => {
    return InstitutionApi.getSingleInstitution(id).then( institution =>{
      return institution;
    }).catch(error =>{
      dispatch(loadSingleInstitutionError(error));
    });
  };
}