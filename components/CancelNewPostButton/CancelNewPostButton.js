import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Container } from 'native-base';

const NewPostButton = props => (
  <Button
    style={styles.createButton}
    rounded={true}
    // danger={true}
    onPress={props.onPress}
  >
    <Text style={styles.buttonText}> {props.insideText} </Text>
  </Button>
);

const styles = StyleSheet.create({
  createButton: {
    width: '95%',
    justifyContent: 'center',
    margin: 20,
    alignSelf: 'center',
    backgroundColor: '#d81c1c'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '900',
    color: 'white'
  }
});

export default NewPostButton;
