import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text } from 'native-base';
import ImagePicker from 'react-native-image-picker';

export default class ImageUpload extends Component {
  state = {
    pickedImage: null
  };

  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: 'Pick an Image' }, res => {
      if (res.didCancel) {
        console.log('User Cancelled');
      } else if (res.error) {
        console.log('Error', res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });
      }
    });
  };

  render() {
    return (
      <View style={{ alignSelf: 'flex-start' }}>
        <Text style={styles.textStyle}>Image</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button
            title="Pick Image"
            onPress={this.pickImageHandler}
            style={{ marginBottom: 30 }}
          >
            <Text>Upload</Text>
          </Button>

          <Image
            source={this.state.pickedImage}
            style={{
              height: 45,
              width: 45,
              marginBottom: 20,
              borderRadius: 10,
              marginLeft: 50
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'flex-start',
    paddingBottom: 10,
    fontWeight: '500'
  }
});
