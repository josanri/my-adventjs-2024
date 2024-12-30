function drawRace(indices: number[], length: number): string {
  // Code here
  let res = "";
  indices.forEach((val, index) => {
    res += " ".repeat(indices.length - index - 1);
    let pos = val;
    if (val < 0) {
      pos = length + val;
    }
    res += `${"~".repeat(pos)}${val ? "r" : "~"}${"~".repeat(length - pos - 1)}`;
    res += ` /${index + 1}\n`;
  });
  return res.slice(0, -1);
}
