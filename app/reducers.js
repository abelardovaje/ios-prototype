import { combineReducers } from 'redux';
import UserReducer from './ios/user/user.reducer';
const reducers = combineReducers({
    User:UserReducer
})

export default reducers;