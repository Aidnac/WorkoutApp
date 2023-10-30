import React from 'react';
import {StyleSheet, FlatList, Text, View, Pressable} from 'react-native';
import {WorkoutItem} from '../components/WorkOutItem';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {useWorkouts} from '../hooks/useWorkouts';

export const HomeScreen = ({navigation}: NativeStackHeaderProps) => {
  const workouts = useWorkouts();
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
