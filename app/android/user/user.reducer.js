const initialState = {
    isLogin:false,
    user:{},
    checkedSignIn:false
}
export default function(state= initialState,action = {}){
    let newState;
    switch(action.type){
        case 'LOGIN':
            newState = {...state};
            newState.isLogin = true;
            newState.user = action.payload;
            console.log('user:',newState.user);
        return newState;

        default:return state;

        case 'LOGOUT' :
            newState = {...state};
            newState.isLogin = false;
            newState.user = {};
        return newState;

        case 'SET_USER':
            newState = {...state}
            newState.isLogin = true;
            newState.checkedSignIn = true;
            newState.user = action.payload
        return newState; 

        case 'SET_CHECKSIGNIN':
            newState = {...state}
            newState.checkedSignIn = true;
        return newState;

    }
}
