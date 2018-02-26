import React from 'react';
import {View, Text} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
class Chat extends React.Component{
    
      constructor(){
          super();
          this.state = {
              messages:[]
          }
      }
    
    componentWillMount() {
       
       
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
            <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        )
    }
}

export default Chat;