import {useState, useEffect} from 'react';

export const useCacheResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = () => {
      //This was going to be used for loading expo fonts
    };

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};
