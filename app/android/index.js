import React from 'react';
import {View, Text} from 'react-native';
import {Navigator} from './navigator/navigator';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import {getUserDataOnLocalStorage} from './login/action';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';
import {AsyncStorage} from 'react-native';
const addListener = createReduxBoundAddListener("root");
class Android extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        // AsyncStorage.removeItem('user');

    }

    render(){
        const { navigationState, dispatch, user } = this.props;
        console.log('USER:',user.checkedSignIn);
        const state = user.isLogin
        ? navigationState.stateForLoggedIn
        : navigationState.stateForLoggedOut;
        
        if(!user.checkedSignIn){
            return null;
        }
       
        return <Navigator
                navigation={
                    addNavigationHelpers({ 
                        dispatch:this.props.dispatch, 
                        state:state,
                        addListener
                     })} 
            />;
    }
}


function mapStateToProps(state){
    return {
        user:state.User,
        navigationState:state.Nav     
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUserDataOnLocalStorage,
        dispatch:dispatch
    },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Android);