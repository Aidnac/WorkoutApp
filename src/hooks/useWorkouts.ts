import {useState, useEffect} from 'react';
import {getworkouts} from '../storage/workouts';
import {Workout} from '../types/data';
import {useIsFocused} from '@react-navigation/native';

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    const getData = async () => {
      const _workouts = await getworkouts();
      setWorkouts(_workouts);
    };
    //used to get new data evertime the page comes to focus
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return workouts;
};
