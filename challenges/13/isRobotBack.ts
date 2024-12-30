function isRobotBack(moves: string): true | [number, number] {
  let pos = [0, 0];
  const doneBefore = {};
  const movesX = {
    R: 1,
    L: -1,
    U: 0,
    D: 0,
  };
  const movesY = {
    R: 0,
    L: 0,
    U: 1,
    D: -1,
  };
  const invertedMoves = {
    R: "L",
    L: "R",
    U: "D",
    D: "U",
  };

  for (let i = 0; i < moves.length; i++) {
    let nextMove = moves[i];
    if (nextMove === "*") {
      nextMove = moves[i + 1];
    } else if (nextMove === "!") {
      i++;
      nextMove = invertedMoves[moves[i]];
    } else if (nextMove === "?") {
      i++;
      nextMove = moves[i];
      if (doneBefore[nextMove]) {
        continue;
      }
    }

    pos[0] += movesX[nextMove];
    pos[1] += movesY[nextMove];
    doneBefore[nextMove] = true;
  }

  if (pos.every((val) => val === 0)) return true;
  else return [pos[0], pos[1]];
}
