import React from 'react';
import {View, Text} from 'react-native';
import {Login} from './login/components/login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StackNavigator} from 'react-navigation';
import {Home} from './home/components';
const createRootNavigator = (signedIn = false) =>{
    let RootStacks = StackNavigator({
        login:{
            screen:Login,
            navigationOptions: {
                gesturesEnabled: false
              }
        },
        home:{
            screen:Home,
            navigationOptions: {
                gesturesEnabled: false
              }
        }
    },{
        headerMode: "none",
        // mode: "modal",
        initialRouteName:'login'
    })


    return RootStacks;
}



class IOSRoot extends React.Component{
    constructor(){
        super();
    }
    render(){
        const Layout = createRootNavigator(this.props.user.isLogin)
        return <Layout/>;
    }
}


function mapStateToProps(state){
    return {
        user:state.User
    }
}
export default connect(mapStateToProps,{})(IOSRoot);