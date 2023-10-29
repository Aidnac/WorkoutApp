import React from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import data from '../../data.json';
import {Workout} from '../types/data';

export const HomeScreen = () => {
  const renderItem = ({item}: {item: Workout}) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.difficulty}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.slug}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
