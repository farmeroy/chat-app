import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import image from "../assets/images/Background-Image.png";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.titleText}>Chat App</Text>
          <View style={styles.box}>
            <TextInput
              style={styles.textInput}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder="Enter your name"
            />
            <Button
              title="Go to Chat"
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                })
              }
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "88%",
  },
  image: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  titleText: {
    flex: 1,
    color: "#fff",
    fontSize: 45,
    fontWeight: "600",
    marginTop: 40,
  },
  box: {
    flex: 1,
    backgroundColor: "#fff",
    width: "88%",
    height: "44%",
    alignItems: "center",
    padding: 5,
    alignSelf: "auto",
    marginBottom: "6%"
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
});

export default Start;
