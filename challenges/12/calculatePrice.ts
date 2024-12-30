function calculatePrice(ornaments: string): number | undefined {
  let total = 0;
  let prev = 0;
  const values = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };
  for (let char of ornaments) {
    const newValue = values[char];
    if (newValue === undefined) {
      return undefined;
    }

    if (newValue > prev) {
      total -= prev + prev;
    }
    total += newValue;
    prev = newValue;
  }
  return total;
}
