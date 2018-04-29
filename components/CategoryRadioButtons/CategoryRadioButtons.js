import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

var radio_props = [
  { label: 'FOOD', value: 0 },
  { label: 'DRINKS', value: 1 },
  { label: 'ACTIVITIES', value: 2 },
  { label: 'STAY', value: 3 }
];

export default class CategoryRadioButtons extends Component {
  state = {
    value: 0
  };

  render() {
    return (
      <View>
        <RadioForm
          labelStyle={{
            margin: 15
          }}
          formHorizontal={true}
          labelHorizontal={false}
          radio_props={radio_props}
          initial={0}
          onPress={value => {
            this.setState({ value });
          }}
        />
      </View>
    );
  }
}
