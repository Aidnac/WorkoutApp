import {useEffect, useState} from 'react';
import {getworkoutBySlug} from '../storage/workouts';
import {Workout} from '../types/data';

export const useWorkout = (slug: string) => {
  const [workout, setWorkout] = useState<Workout>();

  useEffect(() => {
    const getData = async () => {
      const _workout = await getworkoutBySlug(slug);
      setWorkout(_workout);
    };
    getData();
  }, [slug]);

  return workout;
};
