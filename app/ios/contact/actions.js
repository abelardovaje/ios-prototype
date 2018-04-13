import axios from 'axios';
import {APP_HOST} from 'react-native-dotenv';
export function seachContact(data){
    return (dispatch) =>{

        return axios.get(APP_HOST+'/search-contacts',{params:{key:data}}).then((res)=>{
            return res.data;
        });

    }
}

export function addContact(data){
    console.log('add contact:',data);
    return (dispatch) =>{
        return axios.post(APP_HOST+'/add-contact',{data}).then((res)=>{
                console.log(res.data.contact);
                dispatch({
                    type:'ADD-CONTACT',
                    payload:res.data.contact
                });

                dispatch({
                    type:'SERVER/ADD_NEW_CONTACT',
                    payload:{contact:data.contact,user:data.user}
                });
                return true;
        });
    }
}

export function deleteContact(contact,user){
    console.log('user:',user);
    console.log('contact:',contact);
    return (dispatch) =>{
        return axios.post(APP_HOST+'/delete-contact',{contact:contact,user:user}).then(()=>{
            alert('Contact deleted');
            dispatch({
                type:'DELETE_CONTACTS',
                payload:contact
            });

            dispatch({
                type:'SERVER/DELETE_CONTACT',
                payload:{contact:contact,user:user}
            });

        }).catch(()=>{
            alert('Failed to delete contact');
        });;
       
    }
}

export function getContacts(data){
    return (dispatch)=>{
       
        axios.get(APP_HOST+'/get-contacts',{params:{user:data}}).then((res)=>{
           
            for(var x in res.data){
                res.data[x].messages = []
            }
            console.log('CONTACTS:',res.data);
            if(res.data.length){
                dispatch({
                    type:'SET-CONTACTS',
                    payload:res.data
                });
            }        
        });
    }
   
}

export function addNewMessage(data){
    return {
        type:'ADD_NEW_MESSAGE',
        payload:data
    }
}

export function sendNewMessage(message){
    return {
        type:'SERVER/NEW_MESSAGE',
        payload:message
    }
}

export function startSocket(user){
    return {
        type:'SERVER/start',
        payload:user
    }
}