import React from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import data from '../../data.json';
import {Workout} from '../types/data';
import {WorkoutItem} from '../components/WorkOutItem';

export const HomeScreen = () => { 
  return (
    <View style={styles.container}>
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
    padding: 20,
  },
});
