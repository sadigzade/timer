export const createTimerAnimator = (
  setTime: (time: [number, number, number]) => void,
  setButtonDisabled: (val: boolean) => void,
) => {
  let currentSec = 0;

  return (seconds: number) => {
    currentSec = seconds;

    const intervalId = setInterval(() => {
      const hh = Math.floor(currentSec / 3600);
      const mm = Math.floor((currentSec - hh * 3600) / 60);
      const ss = currentSec - hh * 3600 - mm * 60;

      if (hh === 0 && mm === 0 && ss === 0) {
        setButtonDisabled(false);
        clearInterval(intervalId);
      } else if (mm === 0 && ss === 0) {
        setTime([hh - 1, 59, 59]);
      } else if (ss === 0) {
        setTime([hh, mm - 1, 59]);
      } else {
        setTime([hh, mm, ss - 1]);
      }

      currentSec -= 1;
    }, 1000);
  };
};
