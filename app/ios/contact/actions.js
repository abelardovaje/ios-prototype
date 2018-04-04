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
    return (dispatch) =>{
        return axios.post(APP_HOST+'/add-contact',{data}).then((res)=>{
                console.log(res.data.contact);
                dispatch({
                    type:'ADD-CONTACT',
                    payload:res.data.contact
                });
                return true;
        });
    }
}

export function deleteContact(contact,user){
    console.log('user:',user);
    console.log('contact:',contact);
    return (dispatch) =>{
        axios.post(APP_HOST+'/delete-contact',{contact:contact,user:user}).then(()=>{
            alert('Contact deleted');
            dispatch({
                type:'DELETE_CONTACTS',
                payload:contact
            })
        }).catch(()=>{
            alert('Failed to delete contact');
        });;
       
    }
}

export function getContacts(){
    return (dispatch)=>{
        axios.get(APP_HOST+'/get-contacts').then((res)=>{
            
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
