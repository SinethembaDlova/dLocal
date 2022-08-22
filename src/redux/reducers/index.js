import { combineReducers } from 'redux';
import sessionSlice from './session';

const reducer = combineReducers({
  user: sessionSlice
});

export default reducer;
