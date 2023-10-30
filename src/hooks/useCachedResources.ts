import {useState, useEffect} from 'react';
import {getData, storeData} from '../storage';
import data from '../../data.json';

export const useCacheResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      //This was going to be used for loading staff we need beforeapp sstarts
      try {
        await storeData('workout-data', data);
      } catch (e) {
        console.warn(e);
      } finally {
        const workouts = await getData('workout-data');
        console.log(workouts)
        setIsLoadingComplete(true);
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};
