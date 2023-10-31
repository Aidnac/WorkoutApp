import {useEffect, useRef, useState} from 'react';

export const useCountDown = (idx: number, intialCount: number) => {
  const intervalRef = useRef<number>();
  const [countDown, setCountDown] = useState(intialCount);

  useEffect(() => {
    if (idx == -1) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCountDown(count => {
        console.log(count);
        return count - 1;
      });
    }, 100);
    return cleanup;
  }, [idx]);

  useEffect(() => {
    setCountDown(intialCount);
  }, [intialCount]);

  useEffect(() => {
    if (countDown === 0) {
      cleanup();
    }
  }, [countDown]);

  const cleanup = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  return countDown;
};
