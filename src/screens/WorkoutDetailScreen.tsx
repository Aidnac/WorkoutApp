import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {useWorkout} from '../hooks/useWorkout';
import {PressableText} from '../components/styled/PressableText';

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

export const WorkoutDetailScreen = ({route}: Navigation) => {
  const workout = useWorkout(route.params.slug);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{workout?.name}</Text>
      <PressableText
        onPress={() => {
          Alert.alert('something else', 'Has been pressed');
        }}
        text="check sequence"
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
