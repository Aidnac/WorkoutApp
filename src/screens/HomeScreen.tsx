import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';

export const HomeScreen = ({navigation}: any) => {
  useEffect(() => {
    console.log('Rendering Home screen');
  }, []);

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
