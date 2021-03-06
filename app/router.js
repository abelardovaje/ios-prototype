import React from 'react';
import {TabNavigator} from 'react-navigation';
import {ContactStack} from './ios/contact/components/contact-stack';
import {SettingStack} from './ios/setting/components/setting-stack';
import { Icon } from 'react-native-elements';
let config = {
    Contact:{
        screen:ContactStack,
        navigationOptions:{
            tabBarLabel:'Contact',
            tabBarIcon:({tintColor})=><Icon name="ios-home-outline" type="ionicon"  color={tintColor} />
        } 
    },
    Setting:{
        screen:SettingStack,
        navigationOptions:{
            headerTitle:'Settings',
            tabBarIcon:({tintColor})=><Icon name="ios-settings" type="ionicon" color={tintColor}/>
        }
    }
}

let options = {
    tabBarOptions:{
        showLabel:false    
    },
   
}

export default Router = TabNavigator(config,options);
