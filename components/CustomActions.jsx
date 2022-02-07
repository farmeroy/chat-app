import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ActionSheetIOS,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";

export default class CustomActions extends Component {
  constructor(props) {
    super(props);
  }

  onActionPress = () => {
    const options = [
      "Choose From Library",
      "Take Picture",
      "Send Location",
      "Cancel",
    ];
    const cancelButtonIndex = options.length - 1;
    // ActionSheetIOS.showActionSheetWithOptions(
    this.context
      .actionSheet()
      .showActionSheetWithOptions(
        { options, cancelButtonIndex },
        async (buttonIndex) => {
          switch (buttonIndex) {
            case 0:
              console.log("pick an image");
              return;
            case 1:
              console.log("take a photo");
              return this.takePhoto();
            case 2:
              console.log("share location");
              return this.getLocation();
            default:
          }
        }
      );
  };

  getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    try {
      if (status === "granted") {
        const result = await Location.getCurrentPositionAsync({}).catch(
          (error) => {
            console.log(error);
          }
        );
        if (result) {
          this.props.onSend({
            location: {
              longitude: result.coords.longitude,
              latitude: result.coords.latitude,
            },
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    try {
      if (status === "granted") {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
        }).catch((error) => {
          console.error(error);
        });
        if (!result.cancelled) {
          const imageUrl = await this.uploadImage(result.uri);
          this.props.onSend({ image: imageUrl });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  uploadImage = async (uri) => {
    const imgBlob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.onerror = (e) => {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    
    const imageNameBefore = uri.split('/');
    const imageName = imageNameBefore[imageNameBefore.length -1];
    const ref = firedbase.storage().ref().child(`images/${imageName}`);
    const snapshot = await ref.put(imgBlob);

    imgBlob.close();
    return await snapshot.ref.getDownloadURL();
  }
  render() {
    return (
      <TouchableOpacity style={[styles.container]} onPress={this.onActionPress}>
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

CustomActions.contextTypes = {
  actionSheet: PropTypes.func,
};
