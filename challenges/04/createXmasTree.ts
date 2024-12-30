function createXmasTree(height: number, ornament: string): string {
  let res = "";
  for (let index = height; index > 0; index--) {
    res += "_".repeat(index - 1);
    res += ornament.repeat((height - index) * 2 + 1);
    res += "_".repeat(index - 1) + "\n";
  }
  res += `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}\n`;
  res += `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}`;
  return res;
}
