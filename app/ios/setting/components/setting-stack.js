import React from 'react';
import {StackNavigator} from 'react-navigation';
import Profile from '../containers/profile';
export const SettingStack = StackNavigator({
    Profile:{
        screen:Profile,
        navigationOptions:{
            headerTitle:'Settings'
        }
    }
});
