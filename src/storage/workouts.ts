import {containsKey, getData, removeItem, storeData} from '.';
import data from '../../data.json';
import {Workout} from '../types/data';

export const initworkouts = async (): Promise<boolean> => {
  const hasWorkoutKey = await containsKey('workout-data');
  if (!hasWorkoutKey) {
    await storeData('workout-data', data);
    return true;
  }
  return false;
};

export const getworkouts = async (): Promise<Workout[]> => {
  const workouts = await getData('workout-data');
  return workouts;
};

export const getworkoutBySlug = async (slug: string): Promise<Workout> => {
  const workouts = await getData('workout-data');
  const workout = workouts.filter(w => w.slug === slug)[0];
  return workout;
};

export const clearWorkouts = async () => {
  await removeItem('workout-data');
};
