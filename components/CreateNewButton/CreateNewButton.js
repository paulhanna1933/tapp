import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Container } from 'native-base';

const CreateNewButton = props => (
  <Button
    style={styles.createButton}
    rounded={true}
    warning={true}
    onPress={props.onPress}
  >
    <Text style={styles.buttonText}> {props.insideText} </Text>
  </Button>
);

const styles = StyleSheet.create({
  createButton: {
    width: '60%',
    justifyContent: 'center',
    margin: 30,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '900'
  }
});

export default CreateNewButton;
