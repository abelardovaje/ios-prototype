import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logout} from '../actions';
// import Icon from 'react-native-vector-icons/FontAwesome';
class Profile extends React.Component{

    logout = () =>{
       AsyncStorage.removeItem('user');
       this.props.logout();
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


function mapStateToProps(state){
    return {}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        logout
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);