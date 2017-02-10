import InstitutionApi from '../api/mockInstitutionApi';
import {institutionActions} from '../constants/actionTypes';

export default function institutionReducer(state = [], action){
    switch(action.type) {
        case institutionActions.GET_ALL_INSTITUTIONS_SUCCESS:
            return action.institutions;

        default:
            return state;
    }
}