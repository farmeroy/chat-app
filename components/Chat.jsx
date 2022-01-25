import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Chat extends Component {

  componentDidMount() {

    let name = this.props.route.params.name;
    this.props.navigation.setOptions({title: name});
    } 
  render() {
    

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello Screen1!</Text>
      </View>
    );
  }
}

export default Chat;
