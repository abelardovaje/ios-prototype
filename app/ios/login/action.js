export function login(data){
  
    return (dispatch) => {
        
        if(data.username == 'test' && data.password){
            dispatch({
                type:'LOGIN',
                payload:data
            }); 
        }
               
    }
}