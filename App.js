import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { StyleSheet, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "./components/Chat";
import Start from "./components/Start";

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <NavigationContainer style={styles.container}>
          <StatusBar />
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Chat" component={Chat} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
