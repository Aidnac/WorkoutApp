import React from 'react';
import {Button, Text, View} from 'react-native';

export const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>I am home screen</Text>
      <Button
        title="Go to Planner"
        onPress={() => navigation.push('Planner')}
      />
    </View>
  );
};
