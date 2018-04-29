import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Item, Input, Label, Form, Container, Button, Text } from 'native-base';

// Importing Category Radio Buttons Component
import CategoryRadioButtons from '../../components/CategoryRadioButtons/CategoryRadioButtons';

export default class NewPostCreator extends Component {
  static navigationOptions = {
    title: 'NEW POST',
    headerStyle: {
      backgroundColor: 'darkblue'
    },
    headerTintColor: '#fff'
  };
  render() {
    return (
      <Container style={styles.container}>
        {/* Post Caption Input Field */}
        <Text style={styles.textStyle}>Post Caption</Text>
        <Item style={{ marginBottom: 30 }} regular>
          <Input placeholder="Top 3 Cofee Shops" />
        </Item>

        {/* Location Input Field */}
        <Text style={styles.textStyle}>Location</Text>
        <Item style={{ marginBottom: 30 }} regular>
          <Input placeholder="Los Angeles, CA" />
        </Item>

        {/* Image Upload Button */}
        <Text style={styles.textStyle}>Image</Text>
        <Button style={{ marginBottom: 30 }}>
          <Text>Upload</Text>
        </Button>

        {/* Category Selector */}
        <Text style={styles.textStyle}>Category</Text>
        <CategoryRadioButtons />
        {/* Back & Select Choice */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('NewPost')}
          >
            <Text style={{ marginTop: 12, fontSize: 20, color: 'grey' }}>
              Back
            </Text>
          </TouchableOpacity>
          <Button style={styles.fontWeight} rounded success>
            <Text>SELECT CHOICES</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    // marginTop: 30,
    backgroundColor: '#fff'
  },
  textStyle: {
    alignSelf: 'flex-start',
    paddingBottom: 10,
    fontWeight: '500'
  },
  selectedChoicesButton: {
    fontWeight: '700'
  },
  bottomContainer: {
    paddingTop: 30,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
