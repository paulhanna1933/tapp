import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Button, Text, Content } from 'native-base';

import NewPostButton from '../../components/NewPostButton/NewPostButton';
import CancelNewPostButton from '../../components/CancelNewPostButton/CancelNewPostButton';

export default class NewPost extends Component {
  static navigationOptions = {
    title: 'NEW POST',
    headerStyle: {
      backgroundColor: 'darkblue'
    },
    headerTintColor: '#fff'
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={{ color: 'white', alignSelf: 'center' }}>
            {' '}
            CHOOSE A POST TYPE{' '}
          </Text>
          <NewPostButton insideText={'Top 3'} />

          <NewPostButton insideText={'GUIDE'} />

          <NewPostButton insideText={'PHOTO'} />

          <NewPostButton insideText={'VIDEO'} />

          <NewPostButton insideText={'RECOMMENDATION'} />

          <NewPostButton insideText={'SURVEY'} />

          <CancelNewPostButton onPress={() => goBack()} insideText={'CANCEL'} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  }
});
