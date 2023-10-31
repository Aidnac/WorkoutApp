import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useWorkout} from '../hooks/useWorkout';
import {Modal} from '../components/styled/Modal';
import {PressableText} from '../components/styled/PressableText';
import {formatSec} from '../utils/time';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {WorkoutItem} from '../components/WorkOutItem';
import {SequenceItem} from '../types/data';
import {useCountDown} from '../hooks/useCountDown';

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

export const WorkoutDetailScreen = ({route}: Navigation) => {
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  // const [countdown, setCountDown] = useState(-1);

  const [trackerIdx, setTrackerIdx] = useState(-1);
  const workout = useWorkout(route.params.slug);
  const countDown = useCountDown(
    trackerIdx,
    trackerIdx >= 0 ? sequence[trackerIdx].duration : -1,
  );

  const addItemToSequence = (idx: number) => {
    setSequence([...sequence, workout!.sequence[idx]]);
    setTrackerIdx(idx);
  };

  if (!workout) {
    return null;
  }

  return (
    <View style={styles.container}>
      <WorkoutItem item={workout} childStyles={{marginTop: 10}}>
        {/* Model is workout items child */}
        <Modal
          activator={({handleOpen}) => (
            <PressableText onPress={handleOpen} text="From Detaill screen" />
          )}>
          <View>
            {workout?.sequence.map((si, idx) => (
              <View key={si.slug} style={styles.squenceItem}>
                <Text>
                  {si.name} |{si.type} |{formatSec(si.duration)} |
                </Text>
                {idx !== workout.sequence.length - 1 && (
                  <MaterialCommunityIcons name="arrow-down" size={20} />
                )}
              </View>
            ))}
          </View>
        </Modal>
      </WorkoutItem>
      <View style={{alignItems: 'center'}}>
        {sequence.length === 0 && (
          <MaterialCommunityIcons
            name="home"
            size={100}
            onPress={() => addItemToSequence(0)}
          />
        )}
      </View>
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
  squenceItem: {
    alignItems: 'center',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
