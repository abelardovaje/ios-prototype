import axios from 'axios';
import {AsyncStorage} from 'react-native';
import _ from 'lodash';
export function login(data){
  
    return (dispatch) => {
       
       return axios.post('http://localhost:3000/login',{username:data.username,password:data.password}).then((res)=>{
           
            if(res.data){
               dispatch({
                   type: 'LOGIN',
                   payload:res.data
               });
               return res.data;
            }else{
                alert('Invalid username or password');
            }
           
       });
               
    }
}

export function getUserDataOnLocalStorage(){
   return (dispatch) =>{
        return AsyncStorage.getItem('user').then((res)=>{
            
            return JSON.parse(res);
        }).then((parseResponse)=>{
            // console.log(parseResponse);
            if(!_.isEmpty(parseResponse)){
                dispatch({
                    type:'SET_USER',
                    payload:parseResponse
                });
            }      
        });
   }
}