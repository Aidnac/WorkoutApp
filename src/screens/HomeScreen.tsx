import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Text, View, Pressable} from 'react-native';
import {Workout} from '../types/data';
import {WorkoutItem} from '../components/WorkOutItem';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {getworkouts} from '../storage/workouts';

export const HomeScreen = ({navigation}: NativeStackHeaderProps) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  useEffect(() => {
    const getData = async () => {
      const _workouts = await getworkouts();
      setWorkouts(_workouts);
    };
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={item => item.slug}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('WorkoutDetail', {slug: item.slug});
              }}>
              <WorkoutItem item={item} />
            </Pressable>
          );
        }}
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
