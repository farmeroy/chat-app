import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class CustomActions extends Component {
  constructor(props) {
    super(props);
  }

  onActionPress() {
    const options = [
      'Choose From Library', 'Take Picture',
      'Send Location', 'Cancel',
    ];
    const cancelButtonIndex = options.length -1;
    this.context.actionSheet().showActionSheetWithOptions(
      {options,
        cancelButtonIndex,
      },
      async (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            console.log('pick an image');
            return;
          case 1:
            console.log('take a photo');
            return;
          case 2:
            console.log('share location');
            return;
          default:

        }
      },
    );
  }

  render() {
    return (
      <TouchableOpacity style={[styles.container]} onPress={this.onActionPress.bind(this)}>
        <View style={[styles.wrapper, this.props.wrapperStyel]}>
          <Text style={[styles.iconText, this.props.iconTextStyle]}>+</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: "#b2b2b2",
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: "#b2b2b2",
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "transparent",
    textAlign: "center",
  },
});
