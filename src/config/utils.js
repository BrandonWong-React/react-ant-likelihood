import { STATUS } from './const';
export function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return (callback) => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}

export function getAntStatus(globalStatus, itemLikelihood) {
  if (globalStatus === STATUS.DATAFETCH) return 'Not yet run';
  if (itemLikelihood === undefined) return 'In progress';
  return 'Caculated';
}

export function getGlobalStatus(globalStatus) {
  if (globalStatus === STATUS.INITIAL || globalStatus === STATUS.DATAFETCH) {
    return 'Not yet Run';
  }
  if (globalStatus === STATUS.CACULATING) {
    return 'Caculating';
  }
  if (globalStatus === STATUS.FINISHED) {
    return 'Caculation Completed';
  }
}
