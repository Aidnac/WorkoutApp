import React from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import data from '../../data.json';
import {Workout} from '../types/data';
import {WorkoutItem} from '../components/WorkOutItem';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Workouts</Text>
      <FlatList
        data={data as Workout[]}
        keyExtractor={item => item.slug}
        renderItem={WorkoutItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
