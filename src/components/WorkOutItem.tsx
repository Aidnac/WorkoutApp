import React from 'react';
import {View, Text} from 'react-native';
import {Workout} from '../types/data';

export const WorkoutItem = ({item}: {item: Workout}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.difficulty}</Text>
    </View>
  );
};
 