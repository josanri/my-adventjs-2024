function inBox(box: string[]): boolean {
  let found = false;
  box.forEach((row: string, index) => {
    const xIndex = row.indexOf("*");
    if (xIndex === -1) return;
    if ([0, box.length - 1].includes(index)) {
      return false;
    }

    if ([0, row.length - 1].includes(xIndex)) {
      return false;
    }
    found ||= true;
  });
  return found;
}
