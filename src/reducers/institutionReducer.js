import InstitutionApi from '../api/mockInstitutionApi';
import {institutionActions} from '../constants/actionTypes';

export default function institutionReducer(state = defaultState, action){
    switch(action.type) {
        case institutionActions.GET_ALL_INSTITUTIONS:
            return state;

        default:
            return state;
    }
}