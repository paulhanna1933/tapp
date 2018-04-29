import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Container } from 'native-base';

// Import Reusable Components
import CreateNewButton from '../../components/CreateNewButton/CreateNewButton';

export default class FeedScreen extends Component {
  static navigationOptions = {
    title: 'FEED',
    headerStyle: {
      backgroundColor: 'darkblue'
    },
    headerTintColor: '#fff'
  };

  render() {
    return (
      <Container style={styles.container}>
        <CreateNewButton
          onPress={() => this.props.navigation.navigate('NewPost')}
          insideText={'CREATE NEW'}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
