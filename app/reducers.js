import { combineReducers } from 'redux';
import UserReducer from './ios/user/user.reducer';
import ContactReducer from './ios/contact/reducers';
import navigationReducer from './ios/navigator/reducer';


const reducers = combineReducers({
    User:UserReducer,
    Contacts:ContactReducer,
    Nav:navigationReducer
})

export default reducers;