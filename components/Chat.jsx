import React, { Component } from "react";
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text, Button } from "react-native";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }
  componentDidMount() {
    // set our message state here 
    // this will be an AJAX request to firebase,
    // best practice to perform in componentDidMount
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          }
        }
      ]
    })
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.route.params.chatColor,
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    );
  }
}

export default Chat;
