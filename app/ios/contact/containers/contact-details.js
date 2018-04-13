import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addContact} from '../actions';
import {DeviceEventEmitter} from 'react-native';
class ContactDetails extends React.Component{

    add(){
        const {state} = this.props.navigation;
        let data = {
            type:'new-contact',
            source:{
                userId:this.props.user.id
            },
            user:this.props.user,
            contact:state.params
            
        }
              
        this.props.addContact(data).then(()=>{
            this.props.navigation.goBack();
            alert('New contact added!');
            DeviceEventEmitter.emit('refresh');
        });

    }

    render(){
        return(
            <View style={styles.container}>
                <Button
                    title="Add"
                    onPress={this.add.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
});


function mapStateToProps(state){
    return {
        user:state.User.user
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addContact
    },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactDetails);