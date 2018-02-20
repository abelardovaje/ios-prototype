import React from 'react';
import {View, Text} from 'react-native';
import {Navigator} from './navigator/navigator';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';

import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';

const addListener = createReduxBoundAddListener("root");
class IOSRoot extends React.Component{
    constructor(){
        super();
    }
    render(){
        const { navigationState, dispatch, user } = this.props;
        const state = user.isLogin
        ? navigationState.stateForLoggedIn
        : navigationState.stateForLoggedOut;
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
export default connect(mapStateToProps)(IOSRoot);