import InstitutionApi from '../api/mockInstitutionApi'
import {institutionActions} from '../constants/actionTypes';

export function loadInstitutionsSuccess(institutions) {
    return {type: institutionActions.GET_ALL_INSTITUTIONS_SUCCESS, institutions: institutions};
}

export function getAllInstitutions(institutions) {
    return (dispatch) =>{
        return InstitutionApi.getAllInistitutions().then( (institutions) => {
            dispatch(loadInstitutionsSuccess(institutions));
        }).catch((error) => {
            throw(error);
        });
    };
}