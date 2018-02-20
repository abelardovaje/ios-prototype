import { combineReducers } from 'redux';
import UserReducer from './ios/user/user.reducer';
import navigationReducer from './ios/navigator/reducer';


const reducers = combineReducers({
    User:UserReducer,
    Nav:navigationReducer
})

export default reducers;