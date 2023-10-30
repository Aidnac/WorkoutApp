import {useState, useEffect} from 'react';
import {initworkouts} from '../storage/workouts';

export const useCacheResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      //This was going to be used for loading staff we need beforeapp sstarts
      try {
        await initworkouts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};
