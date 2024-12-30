type Space = "·" | "@" | "*" | "o";
type Board = Space[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
  let row;
  let col;
  const movementToRowIncrease = {
    U: -1,
    D: 1,
    L: 0,
    R: 0,
  };
  const movementToColIncrease = {
    U: 0,
    D: 0,
    L: -1,
    R: 1,
  };

  board.forEach((curr, idx) => {
    const headIndex = curr.indexOf("@");
    if (headIndex != -1) {
      row = idx;
      col = headIndex;
    }
  });
  let increasedRow = row + movementToRowIncrease[mov];
  let increasedCol = col + movementToColIncrease[mov];
  let outOfMap =
    [-1, board[0].length].includes(increasedCol) ||
    [-1, board.length].includes(increasedRow);
  if (outOfMap || board[increasedRow][increasedCol] === "o") {
    return "crash";
  } else if (board[increasedRow][increasedCol] === "*") {
    return "eat";
  } else {
    return "none";
  }
}
