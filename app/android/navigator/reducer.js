import {Navigator} from './navigator';
//let initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('login'));
let ActionLoggedIn = Navigator.router.getActionForPathAndParams('login');
let ActionLoggedOut = Navigator.router.getActionForPathAndParams('home');

let stateForLoggedIn = Navigator.router.getStateForAction(ActionLoggedOut);
let stateForLoggedOut = Navigator.router.getStateForAction(ActionLoggedIn);
let initialState = {
    stateForLoggedIn,
    stateForLoggedOut
}
export default function navigationReducer(state = initialState, action){

    
    switch(action.type){
        // case "@@redux/INIT":
        // return {
        //   ...state,
        //   stateForLoggedIn: Navigator.router.getStateForAction(ActionLoggedIn, stateForLoggedOut)
        // };
        case 'LOGIN':

        return {
            ...state,
            stateForLoggedIn: Navigator.router.getStateForAction(ActionLoggedOut, stateForLoggedOut)
        };

        // case 'LOGOUT':

        // return {
        //     ...state,
        //     stateForLoggedIn: Navigator.router.getStateForAction(ActionLoggedIn, stateForLoggedIn)
        // }

        // case 'SET_USER':
    
        // return {
        //     ...state,
        //     stateForLoggedIn: Navigator.router.getStateForAction(ActionLoggedOut, stateForLoggedIn)
        // };

        default :   return state;
    }
   
    
}
