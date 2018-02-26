import React from 'react';
import {StackNavigator} from 'react-navigation';
import List from '../containers/list';
import Chat from '../containers/chat';
let config = {
    List:{
        screen:List,
        navigationOptions:{
            headerTitle:'BELINE',
            headerBackTitle:'back',
        }
    },
    Chat:{
        screen:Chat,
        navigationOptions:({navigation})=>{
            const {params} = navigation.state;
            return {
                title:params.name.first,
                tabBarVisible: false,
            }
        }
    }
}

let options = {
    showLabel:false,
    initialRouteName:'List',
    navigationOptions:{
        headerStyle:{
            backgroundColor:'#0AC25A', 
            borderBottomWidth: 0
        },
        headerTintColor:'white'
    },
    
}

export const ContactStack = StackNavigator(config,options);
