import {useState, useEffect} from 'react';
import {getworkouts} from '../storage/workouts';
import {Workout} from '../types/data';

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  useEffect(() => {
    const getData = async () => {
      const _workouts = await getworkouts();
      setWorkouts(_workouts);
    };
    getData();
  }, []);

  return workouts;
};
