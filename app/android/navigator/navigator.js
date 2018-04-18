import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import {Home} from '../home/components';
import {Login} from '../login/components/login';
export const Navigator  = StackNavigator({
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
});