import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default class CustomActions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
        ]}
        onPress={this.onActionPress}
      >
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
   borderColor: '#b2b2b2',
   borderWidth: 2,
   flex: 1,
 },
 iconText: {
   color: '#b2b2b2',
   fontWeight: 'bold',
   fontSize: 16,
   backgroundColor: 'transparent',
   textAlign: 'center',
 },
});
