import axios from 'axios';
export function seachContact(data){
    return (dispatch) =>{
        return axios.get('http://localhost:3000/search-contacts',{params:{key:data}}).then((res)=>{
            return res.data;
        });
    }
}

export function addContact(events){
    return (dispatch) =>{
        axios.post('http://10.10.40.40:3000/callback',{events}).then((res)=>{
                console.log(res);
        });
    }
}