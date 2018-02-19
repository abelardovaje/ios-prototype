export function login(data){
  
    return (dispatch) => {
        
        if(data.username == 'test' && data.password == '1234'){
            dispatch({
                type:'LOGIN',
                payload:data
            });            
            return true;
        }else{
           return false;
        }

        
    }
}