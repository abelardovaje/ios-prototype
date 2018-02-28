
export default function(state=[],action= {}){
    switch(action.type){
        case 'ADD-CONTACT':
        return [...state,action.payload[0]];
        
        default : return state;
    }
}