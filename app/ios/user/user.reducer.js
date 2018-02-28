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
        return newState;

        default:return state;

        case 'SET_USER':
            newState = {...state}
            newState.isLogin = true;
            newState.user = action.payload
        return newState; 
    }
}
