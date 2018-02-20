const initialState = {
    isLogin:false,
    user:{}
}
export default function(state= initialState,action = {}){
    let newState;
    switch(action.type){
        case 'LOGIN':
        let newState = {...state};
        newState.isLogin = true;
        return newState;

        default:return state;
    }
}
