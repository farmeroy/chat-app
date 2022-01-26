import React, { Component } from "react";
import { Pressable, StyleSheet } from "react-native";

export default class ColorBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Pressable
        style={[styles.colorBtn, {backgroundColor: this.props.color}]}
        onPress={this.props.onPress}
      ></Pressable>
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
