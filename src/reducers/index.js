import {combineReducers} from 'redux';
import institutions from './institutionReducer';
import site from './siteReducer';

const rootReducer = combineReducers({
  institutions: institutions,
  site        : site
});

export default rootReducer;