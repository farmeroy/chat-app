import React, { Component } from "react";
import {
  Day,
  SystemMessage,
  Bubble,
  GiftedChat,
} from "react-native-gifted-chat";
import { View, Platform, KeyboardAvoidingView } from "react-native";
//FIREBASE
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7EgxkPoRr-ZiWGzz3NTX9FdaMxsYd4UU",
  authDomain: "chat-app-e07d5.firebaseapp.com",
  projectId: "chat-app-e07d5",
  storageBucket: "chat-app-e07d5.appspot.com",
  messagingSenderId: "412282694708",
  appId: "1:412282694708:web:3f3f517ca1cdaa652d6e61",
};

// const dummyMessages = [{
//     _id: 1,
//     text: `Hello ${name}`,
//     createdAt: new Date(),
//     user: {
//       _id: 2,
//       name: "React Native",
//       avatar: "https://placeimg.com/140/140/any",
//     },
//   },
//   {
//     _id: 2,
//     text: `${name} has entered the chat`,
//     createdAt: new Date(),
//     system: true,
//   },
// ];

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      uid: null,
      name: ''
    };
    //connects to the database
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      // creates a reference to my collection
      this.referenceMessages = firebase.firestore().collection("messages");
    }
  }

  componentDidMount() {
    this.setState({
      name:  this.props.route.params.name,
    })
    this.props.navigation.setOptions({ title: this.state.name });

    // set our message state here
    // this will be an AJAX request to firebase,
    // best practice to perform in componentDidMount
    // signs the user in anonymously and loads in messages from database
    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        messages: [],
      });
      this.unsubscribe = this.referenceMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  componentWillUnmount() {
    // close connections when we close the app
    this.unsubscribe();
    this.authUnsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    /**
     * Whenever the collection updates, rewrite the new collection to state.
     */
    const messages = [];
    // go through each doc
    querySnapshot.forEach((doc) => {
      // get the data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
        uid: this.state.uid,
      });
    });
    this.setState({
      messages,
    });
  };

  addMessage() {
    // send a new message to the server
    // the first message in our list is the new one
    const newMessage = this.state.messages[0];
    console.log(newMessage)
    this.referenceMessages.add({
      _id: newMessage._id,
      text: newMessage.text,
      createdAt: newMessage.createdAt,
      user: {
        _id: this.state.uid,
        name: this.state.name,
        avatar: "https://placeimg.com/140/140/any",
      },
      uid: this.state.uid,
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }), () => {
      this.addMessage();
    });
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
            _id: this.state.uid,
            name: this.state.name,
            avatar: 'https://placeimg.com/140/140/any',
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
