import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

export default class ImageUpload extends Component {
  render() {
    return (
      <View style={{ alignSelf: 'flex-start' }}>
        <Text style={styles.textStyle}>Image</Text>
        <Button style={{ marginBottom: 30 }}>
          <Text>Upload</Text>
        </Button>
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
