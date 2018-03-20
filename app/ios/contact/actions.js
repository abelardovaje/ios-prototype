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

export function getContacts(){
    return (dispatch)=>{
        axios.get(APP_HOST+'/get-contacts').then((res)=>{
            console.log('contacts',res);
            if(res.data.length){
                dispatch({
                    type:'SET-CONTACTS',
                    payload:res.data
                });
            }
           
        });
    }
   
}