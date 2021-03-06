import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default class ColorBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        // android_ripple={{color: 'white'}}
        accessible={true}
        accessibilityLabel="background color"
        accessibilityHint="Let’s you choose a background color for the chat screen."
        style={[
          styles.colorBtn,
          { backgroundColor: this.props.color, borderColor: this.props.color },
        ]}
        onPress={this.props.onPress}
      ></TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  colorBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
