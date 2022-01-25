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
            <View style={styles.container}>
              <Text>Choose a background color:</Text>
              <View style={styles.colorChoices}>
                <View style={[styles.color, styles.color1]} />
                <View style={[styles.color, styles.color2]} />
                <View style={[styles.color, styles.color3]} />
                <View style={[styles.color, styles.color4]} />
              </View>
            </View>
            <Button
              style={styles.goToChatBtn}
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
    padding: 20,
    alignSelf: "auto",
    marginBottom: "6%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  colorChoices: {
    width: '88%',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  color: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color1: {
    backgroundColor: "#090C08",
  },
  color2: {
    backgroundColor: "#474056",
  },
  color3: {
    backgroundColor: "#8A95A5",
  },
  color4: {
    backgroundColor: "#B9C6AE",
  },
  goToChatBtn: {
    height: 80,
    fontSize: 16,
    fontWeight: "600",
    backgroundColor: "#757083",
    flex: 1
  },
});

export default Start;
