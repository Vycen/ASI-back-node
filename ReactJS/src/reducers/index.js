import { combineReducers } from 'redux';
import UpdateModelReducer from './UpdateModelReducer';
import SelectedReducer from './SelectedReducer';

const appReducers = combineReducers({
  UpdateModelReducer,
  SelectedReducer
});

export default appReducers