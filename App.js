import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';

// Import Screens
import FeedScreen from './screens/Feed/Feed';
import NewPostScreen from './screens/NewPost/NewPost';
import NewPostCreatorScreen from './screens/NewPostCreator/NewPostCreator';

const App = StackNavigator({
  Feed: {
    screen: FeedScreen
  },
  NewPost: {
    screen: NewPostScreen
  },
  NewPostCreator: {
    screen: NewPostCreatorScreen
  }
});

export default App;
