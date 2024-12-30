function compile(instructions: string[]): number {
  const memory = {};
  let counter = 0;
  const instructionS = instructions.map((ins) => ins.split(" "));
  while (counter < instructions.length) {
    let pos;
    let val;

    if (instructionS[counter][0] === "MOV") {
      val = instructionS[counter][1];
      pos = instructionS[counter][2];
      if (!isNaN(val)) {
        memory[pos] = Number(val);
      } else {
        memory[pos] = memory[val];
      }
    } else if (instructionS[counter][0] === "INC") {
      pos = instructionS[counter][1];
      memory[pos] ||= 0;
      memory[pos] += 1;
    } else if (instructionS[counter][0] === "DEC") {
      pos = instructionS[counter][1];
      memory[pos] ||= 0;
      memory[pos] -= 1;
    } else if (instructionS[counter][0] === "JMP") {
      pos = instructionS[counter][1];
      val = instructionS[counter][2];
      if ([0, undefined].includes(memory[pos])) {
        counter = val - 1;
      }
    }
    counter++;
  }
  return memory["A"];
}
