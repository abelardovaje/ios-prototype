export function logout(){
    return (dispatch) =>{
        dispatch({
            type:'LOGOUT',
            payload:false
        })

        dispatch({
            type:'REMOVE-CONTACTS',
            payload:false
        })
    }
}