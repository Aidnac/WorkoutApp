export const secToMin = (sec: number) => {
  return sec / 60;
};

export const formatSec = (sec: number) => {
  const _min = Math.floor(sec / 60);
  const _sec = sec % 60;
  if (_min === 0) {
    return `${_sec} sec`;
  } else if (_sec === 0) {
    return `${_min} min`;
  } else {
    return `${_min} min and ${_sec} sec`;
  }
};
