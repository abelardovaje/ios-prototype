import {AsyncStorage} from 'react-native';
import _ from 'lodash';
class CreateSocketMiddleware {
    constructor(socket){
        this.socket = socket;
        return store =>{
            AsyncStorage.getItem('user').then((res)=>{         
                return JSON.parse(res);
            }).then((parseResponse)=>{
                if(!_.isEmpty(parseResponse)){
                    store.dispatch({
                        type:'SET_USER',
                        payload:parseResponse
                    });
                    // console.log(parseResponse);
                    // this.socket.emit('start',parseResponse);
                }
                
                store.dispatch({
                    type:'SET_CHECKSIGNIN'
                });
            });

            this.socket.on('action',function(data){
                store.dispatch({
                    type:data.type,
                    payload:data.payload
                })     
            })
            return this.socketMiddleware;
        };
    }

    socketMiddleware = next => (action) =>{
      
        if(action){
            let actionArr= action.type.split('/');
            if(this.evaluate(actionArr)){
                this.socket.emit(actionArr[1],action.payload);
            }
        }    
        return next(action);
    }

    evaluate(action){      
        if(action[0] == 'SERVER'){
            return true;
        }
        return false;
    }

}

export default CreateSocketMiddleware;


