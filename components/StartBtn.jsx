import React, { Component } from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';

export default class StartBtn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Pressable onPress={this.props.onPress} style={styles.startBtn}>
        <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </Pressable>
    )
  }
}

const styles = StyleSheet.create({
  startBtn: {
    width: '100%',
    height: 60,
    backgroundColor: "#757083",
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center'
  },
  container: {
    flex:1,
    justifyContent: 'center'
  }
})
