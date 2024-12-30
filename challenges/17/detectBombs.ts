function detectBombs(grid: boolean[][]): number[][] {
  let res: number[][] = [];
  function addBomb(i, j) {
    return (grid[i] ?? [false])[j] ? 1 : 0;
  }

  for (let i = 0; i < grid.length; i++) {
    res.push([]);
    for (let j = 0; j < grid[i].length; j++) {
      res[i][j] = 0;
      res[i][j] +=
        addBomb(i - 1, j - 1) + addBomb(i - 1, j) + addBomb(i - 1, j + 1);
      res[i][j] += addBomb(i, j - 1) + addBomb(i, j + 1);
      res[i][j] +=
        addBomb(i + 1, j - 1) + addBomb(i + 1, j) + addBomb(i + 1, j + 1);
    }
  }
  return res;
}
