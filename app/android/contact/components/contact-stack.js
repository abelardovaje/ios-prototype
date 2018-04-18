import React from 'react';
import {StackNavigator} from 'react-navigation';
import List from '../containers/list';
import Chat from '../containers/chat';
import ContactDetails from '../containers/contact-details';
import { Icon } from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

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
                headerTitle:params.name,
                tabBarVisible: false,
                headerRight:(
                   <View style={styles.container}>
                        <Icon name='ios-arrow-down'
                            size={30}
                            onPress={()=>(params.handleToggleDropdown) ? params.handleToggleDropdown(): null}
                            underlayColor='#0AC25A'
                            type='ionicon' iconStyle={
                            {color:'white',marginRight:10}                          
                        } />
                   </View>
                )

            }
        }
    },
    ContactDetails:{
        screen:ContactDetails,
        navigationOptions:({navigation}) =>{
            const {params} = navigation.state;
            return {
                title:params.name,
                tabBarVisible:false
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

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginRight:5
    }
})

export const ContactStack = StackNavigator(config,options);
