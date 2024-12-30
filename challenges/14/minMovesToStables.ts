function minMovesToStables(reindeer: number[], stables: number[]): number {
  const reindeerSorted = reindeer.slice(0).sort();
  let stablesSorted = stables.slice(0).sort();
  let total = 0;
  reindeerSorted.forEach((reinder) => {
    let positionToRemove = 0;
    const min = stablesSorted.reduce((previous, stable, idx) => {
      if (Math.abs(stable - reinder) < previous) {
        positionToRemove = idx;
        previous = Math.abs(stable - reinder);
      }
      return previous;
    }, Infinity);

    total += min;
    stablesSorted.splice(positionToRemove, 1);
  });
  return total;
}
