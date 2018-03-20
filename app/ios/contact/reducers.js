
export default function(state=[],action= {}){
    let newState;
    switch(action.type){
        case 'ADD-CONTACT':
        return [...state,action.payload];

        case 'REMOVE-CONTACTS':
        newState = [...state];
        newState = [];
        return newState;

        case 'SET-CONTACTS':
        newState = [...state];
        newState = action.payload.map((o)=>{
            return o._user[0];
        });
        return newState;
        default : return state;
    }
}