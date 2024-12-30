function drawTable(data: Array<Record<string, string | number>>): string {
  function drawLine(charactersPerKey) {
    let line = "+";
    for (const key in charactersPerKey) {
      line += "-".repeat(maxSizePerLabel[key] + 2);
      line += "+";
    }
    line += "\n";
    return line;
  }

  const maxSizePerLabel = {};
  let result = "";
  for (const item of data) {
    for (const key in item) {
      const basicMin = Math.max(key.length, item[key].toString().length);
      maxSizePerLabel[key] = Math.max(
        maxSizePerLabel[key] ?? -Infinity,
        basicMin,
      );
    }
  }

  result += drawLine(maxSizePerLabel);
  result += "|";

  for (const key in maxSizePerLabel) {
    let x = key.charAt(0).toUpperCase();
    let y = key.slice(1).padEnd(maxSizePerLabel[key] - 1, " ");
    const filling = x + y;
    result += ` ${filling} |`;
  }

  result += "\n";
  result += drawLine(maxSizePerLabel);

  for (const item of data) {
    result += "|";
    for (const key in maxSizePerLabel) {
      const fill = item[key];
      const filling = fill.toString().padEnd(maxSizePerLabel[key], " ");
      result += ` ${filling} |`;
    }
    result += "\n";
  }

  result += drawLine(maxSizePerLabel);
  return result.slice(0, -1);
}
