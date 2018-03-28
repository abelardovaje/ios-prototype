import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import DropDownMenu from '../../shared/dropdown-menu';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteContact, sendNewMessage, addNewMessage} from '../actions'
import _ from 'lodash';
class Chat extends React.Component{
    
      constructor(){
          super();
          this.state = {
              messages:[],
              toggleDropdown:false,
              clientId:'',
              contactIndex:0
          }
          this.toggleDropdown = this.toggleDropdown.bind(this);
      }
    
    componentDidMount() {
        const {navigation} = this.props;
        console.log('PROPS:',this.props);
       
        navigation.setParams({
            handleToggleDropdown:this.toggleDropdown,
            toggleDropdown:this.state.toggleDropdown
        })

        let index = _.findIndex(this.props.contacts,function(o){
            return o._id === navigation.state.params._id;
        });

        this.setState({
            clientId:navigation.state.params._id,
            contactIndex:index
        });
       
    }
 
    toggleDropdown(){
       this.setState({
           toggleDropdown:!this.state.toggleDropdown
       })
    }
    onSend(messages = []) {
        console.log(messages);
        const {navigation, user} = this.props;
        var client = navigation.state.params;
        var sender = user;
        var data = {
            messages,
            client,
            user
        }
        this.props.sendNewMessage(data);      
        this.props.addNewMessage(data);
    }
    render(){
        const {state} = this.props.navigation;
        return(
            <View style={styles.container}>
                 <DropDownMenu 
                    show={this.state.toggleDropdown}
                    toggleDropdown={this.toggleDropdown}
                    deleteContact={this.props.deleteContact}
                    contact={state.params}
                    user = {this.props.user}
                />
                <GiftedChat
                    messages={this.props.contacts[this.state.contactIndex].messages}
                    onSend={messages => this.onSend(messages)}
                    renderAvatar = {()=>{
                        return null;
                    }}
                    showUserAvatar={false}
                    showAvatarForEveryMessage={false}
                    renderAvatarOnTop={true}
                    user={{
                    _id: this.props.user._id,
                    avatar: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg',
                    
                    }}               
                />
                   
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red'
    }
});

function mapStateToProps(state){
    return {
        user:state.User.user,
        contacts:state.Contacts
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        deleteContact,
        sendNewMessage,
        addNewMessage
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat);