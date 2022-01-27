import React, { Component } from "react";
import {
  Day,
  SystemMessage,
  Bubble,
  GiftedChat,
} from "react-native-gifted-chat";
import { View, Platform, KeyboardAvoidingView } from "react-native";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

    // set our message state here
    // this will be an AJAX request to firebase,
    // best practice to perform in componentDidMount
    this.setState({
      messages: [
        {
          _id: 1,
          text: `Hello ${name}`,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 2,
          text: `${name} has entered the chat`,
          createdAt: new Date(),
          system: true,
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  // custom setting for the <Day/> message
  renderDay(props) {
    return (
      <Day
        {...props}
        textStyle={{
          color: "#fff",
        }}
      />
    );
  }

  // change the styles for system messages
  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        textStyle={{
          color: "#fff",
        }}
      />
    );
  }

  // function that allows custom Bubble settings
  // target each wrapp with either right or left
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000",
          },
        }}
      />
    );
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.route.params.chatColor,
          flex: 1,
          flexDirection: "column",
        }}
      >
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          renderDay={this.renderDay.bind(this)}
          renderSystemMessage={this.renderSystemMessage.bind(this)}
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {/* fix for older android systems */}
        {Platform.OS === "android" ? (
          <KeyboardAvoidingView behavior="height" />
        ) : null}
      </View>
    );
  }
}

export default Chat;
