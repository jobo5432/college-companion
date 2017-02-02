import {combineReducers} from 'redux';
import institutions from './institutionReducer';

const rootReducer = combineReducers({
    institutions: institutions
});

export default rootReducer;