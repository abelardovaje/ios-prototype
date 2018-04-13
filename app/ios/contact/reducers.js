import _ from 'lodash';
import { GiftedChat } from 'react-native-gifted-chat';
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

        case 'DELETE_CONTACTS' :
            newState = [...state];
            
            newState = _.filter(newState,function(o){
                return o.id != action.payload.id;
            });     
        return newState;

        case 'ADD_NEW_MESSAGE':
            var data = action.payload;
            newState = [...state];
            for(var x in newState){
                if(newState[x]._id === data.client._id){
                    newState[x].messages = GiftedChat.append(newState[x].messages,data.messages);
                }
            }
        return newState

        case 'RECEIVE_NEW_MESSAGE':
            var data = action.payload;
            newState = [...state];       
            for(var x in newState){             
                if(newState[x]._id === data.user._id){             
                    newState[x].messages = GiftedChat.append(newState[x].messages,data.messages);
                }
            }
        return newState;

        case 'NEW_CONTACT':
            var data = action.payload;
            newState = [...state];
            newState.push(data.user);   
        return newState;
        
        default : return state;
    }
}