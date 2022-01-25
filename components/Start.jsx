import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Start extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello Screen1!</Text>
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate("Chat")}
        />
      </View>
    );
  }
}

export default Start;
