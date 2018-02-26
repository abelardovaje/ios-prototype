import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
class Profile extends React.Component{

    logout = () =>{
        alert('');
    }

    render(){
        return(
            <View style={styles.container}>
                <Button title="Logout" onPress={this.logout}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

});

export default Profile;