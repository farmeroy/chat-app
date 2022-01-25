import React, { Component } from "react";
import { TextInput, View, Text, Button, StyleSheet } from "react-native";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello Screen1!</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder="Enter your name"
        />
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate("Chat", {name: this.state.name})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  } 
} ) 

export default Start;
