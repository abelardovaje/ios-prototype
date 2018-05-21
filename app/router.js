import React from 'react';
import {TabNavigator, TabBarBottom} from 'react-navigation';
// import {ContactStack} from './ios/contact/components/contact-stack';
// import {SettingStack} from './ios/setting/components/setting-stack';

import {ContactStack} from './android/contact/components/contact-stack';
import {SettingStack} from './android/setting/components/setting-stack';
import { Icon } from 'react-native-elements';
let config = {
    Contact:{
        screen:ContactStack,
        navigationOptions:{
            tabBarLabel:'Contact',
            tabBarIcon:({tintColor})=><Icon name="ios-home" type="ionicon"  color={tintColor} />
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
    tabBarPosition :'bottom',
    tabBarComponent: TabBarBottom,
    tabBarOptions:{
        showLabel:true,
        inactiveTintColor :'gray',
        activeTintColor :'#0AC25A',
        style: {
            backgroundColor: 'whitesmoke',
        }    
    },
   
}

export default Router = TabNavigator(config,options);
