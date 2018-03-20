const initialState = {
    isLogin:false,
    user:{}
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
            newState.user = action.payload
        return newState; 

        
    }
}
