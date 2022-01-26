import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ColorBtn from "./ColorBtn";
import StartBtn from "./StartBtn";
import image from "../assets/images/Background-Image.png";
const icon = require('../assets/icon.svg');

const color1 = "#090C08";
const color2 = "#474056";
const color3 = "#8A95A5";
const color4 = "#B9C6AE";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      chatColor: color4,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.titleText}>Chat App</Text>
          <View style={styles.box}>
            <View style={styles.inputBox}>
              <Icon name="user" size={30} color="#888" style={styles.userIcon}/>
              <TextInput
                style={styles.textInput}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder="Your Name"
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.colorsText}>Choose a background color:</Text>
              <View style={styles.colorChoices}>
                <ColorBtn
                  title=""
                  color={color1}
                  onPress={() => this.setState({ chatColor: color1 })}
                />
                <ColorBtn
                  title=""
                  color={color2}
                  onPress={() => this.setState({ chatColor: color2 })}
                />
                <ColorBtn
                  title=""
                  color={color3}
                  onPress={() => this.setState({ chatColor: color3 })}
                />
                <ColorBtn
                  title=""
                  color={color4}
                  onPress={() => this.setState({ chatColor: color4 })}
                />
              </View>
            </View>
            <StartBtn
              title="Start Chatting"
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  chatColor: this.state.chatColor,
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
    flex: 6,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
  userIcon:{
    flex: 1,
    padding: 12,
    opacity: .50,

    },
  inputBox: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
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
    flexShrink: 0,
    padding: "6%",
    backgroundColor: "#fff",
    width: "88%",
    height: "44%",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "auto",
    marginBottom: "6%",
    minHeight: 260,
    maxHeight: 300,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    flexShrink: 0
  },
  colorChoices: {
    width: "88%",
    flexShrink: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colorsText: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
});

export default Start;
