export default function(state=[],action=[]){
    switch(action.type){
        case 'SET_SOCKET':
            let newState = [...state];
            newState = action.payload
        return state;
    }
}