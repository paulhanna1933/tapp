import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';

// Import Screens
import FeedScreen from './screens/Feed/Feed';
import NewPostScreen from './screens/NewPost/NewPost';

const App = StackNavigator({
  Feed: {
    screen: FeedScreen
  },
  NewPost: {
    screen: NewPostScreen
  }
});

export default App;
