import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addContact} from '../actions';
class ContactDetails extends React.Component{

    add(){
        let events = [
            {
                type:'add-new-contacts',
                source:{
                    userId:10
                },
                user:this.props.user
            }
        ]
    
        this.props.addContact(events);

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