import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

export const PlannerScreen = ({navigation}: NativeStackHeaderProps) => {
  useEffect(() => {
    console.log('Rendering Planner Screen');
  }, []);
  return (
    <View>
      <Text>I am Planner screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
