function distributeWeight(weight: number): string {
  function getNextWeight(newWeight: number): number {
    return weightBox.reduce((acc, val) => {
      if (newWeight - val >= 0) {
        return Math.max(val, acc);
      }
      return acc;
    }, -Infinity);
  }

  const boxRepresentations = {
    1: [" _ \n", "", "|_|\n"],
    2: [" ___ \n", "", "|___|\n"],
    5: [" _____ \n", "|     |\n", "|_____|\n"],
    10: [" _________ \n", "|         |\n", "|_________|\n"],
  };
  const weightToSize = {
    1: 3,
    2: 5,
    5: 7,
    10: 11,
  };
  const weightBox = [10, 5, 2, 1];
  let res = "";
  const q: number[] = [];

  while (weight > 0) {
    const desired = getNextWeight(weight);
    q.unshift(desired);
    weight -= desired;
  }

  let previous = 0;
  while (q.length > 0) {
    const removed = q.shift() as number;
    const b = boxRepresentations[removed];
    let ceil: string = b[0];
    let wall: string = b[1];
    let floor: string = b[2];
    if (previous !== 0) {
      res = res.slice(0, -1); // Remove last \n
      ceil = ceil.slice(weightToSize[previous]);
      if (previous <= removed) {
        ceil = ceil.slice(0, -2) + "\n";
      }
    }
    res += `${ceil}${wall}${floor}`;
    previous = removed;
  }
  return res.slice(0, -1);
}
