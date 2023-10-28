import React from 'react';
import {View, Text, Button} from 'react-native';

export const PlannerScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>I am Planner screen</Text>
      <Button title="Go to Home" onPress={() => navigation.push('Home')} />
    </View>
  );
};
