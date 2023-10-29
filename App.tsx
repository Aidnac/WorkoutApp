import React from 'react';
import {Navigation} from './src/navigation';
import {useCacheResources} from './src/hooks/useCachedResources';

export default function App() {
  const isLoaded = useCacheResources();
  return (
    <>
      <Navigation />
    </>
  );
}
