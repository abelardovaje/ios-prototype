import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import DropDownMenu from '../../shared/dropdown-menu';
class Chat extends React.Component{
    
      constructor(){
          super();
          this.state = {
              messages:[],
              toggleDropdown:false
          }
          this.toggleDropdown = this.toggleDropdown.bind(this);
      }
    
    componentWillMount() {
        const {navigation} = this.props;
        navigation.setParams({
            handleToggleDropdown:this.toggleDropdown,
            toggleDropdown:this.state.toggleDropdown
        })
       
    }
    toggleDropdown(){
       this.setState({
           toggleDropdown:!this.state.toggleDropdown
       })
    }
    onSend(messages = []) {
        console.log(messages);
        const {navigation} = this.props;
        let count = 0;
        let _self = this;
        let data = {}
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
    }
    render(){
        return(
            <View style={styles.container}>
                
                <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                _id: 1,
                }}
                
                />
                
                <DropDownMenu 
                show={this.state.toggleDropdown}
                toggleDropdown={this.toggleDropdown}
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
export default Chat;