import React from 'react';
import LoginForm from '../containers/login-form';
import {View, StyleSheet, Text} from 'react-native';
export const Login = ({navigation}) =>{
    return (
      <View style={styles.container}>
            <View style={styles.logoContainer}>                
                <Text style={styles.loginTitle}>BE-LINE</Text>
            </View>
            <LoginForm navigation = {navigation}/>
      </View>
     
    )
}

let styles = StyleSheet.create({
    container:{
      flex:1
    },
    logoContainer:{
      // marginTop:50,
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#0AC25A',
    },
    loginTitle:{
      fontSize:30,
      color:'white'
    },
});