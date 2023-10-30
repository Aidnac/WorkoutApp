import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getworkoutBySlug} from '../storage/workouts';

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

export const WorkoutDetailScreen = ({route}: Navigation) => {
  useEffect(() => {
    const getData = async () => {
      const workout = await getworkoutBySlug(route.params.slug);
      console.log(workout);
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Slug - {route.params.slug}</Text>
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
