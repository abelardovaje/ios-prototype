import axios from 'axios';
export function seachContact(data){
    return (dispatch) =>{
        axios.get('http://localhost:3000/search-contacts',{params:{key:data}}).then((res)=>{
            console.log('result:',res);
        });
    }
}