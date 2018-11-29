import { combineReducers } from 'redux';
import UpdateModelReducer from './UpdateModelReducer';
import SelectedReducer from './SelectedReducer';
import CommandReducer from './CommandReducer';

const appReducers = combineReducers({
  UpdateModelReducer,
  SelectedReducer,
  CommandReducer
});

export default appReducers