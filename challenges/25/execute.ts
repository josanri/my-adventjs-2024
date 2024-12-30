function execute(code: string): number {
  let res = 0;
  let index = 0;
  function nextIns() {
    index++;
  }
  function addOne() {
    res++;
    nextIns();
  }
  function subOne() {
    res--;
    nextIns();
  }
  function conditionIns() {
    let nextClose = code.indexOf("}", index);
    if (res !== 0) {
      nextIns();
      whileLoop(nextClose);
    }
    index = nextClose;
    nextIns();
  }

  function loopIns() {
    let loopStart = index;
    let nextClose = code.indexOf("]", index);
    while (res !== 0) {
      index = loopStart + 1;
      whileLoop(nextClose);
    }
    index = nextClose;
    nextIns();
  }
  function whileLoop(len: number) {
    while (index < len) {
      symToAction[code.charAt(index)]();
    }
  }
  const symToAction = {
    "+": addOne,
    "-": subOne,
    "{": conditionIns,
    "[": loopIns,
    ">": nextIns,
  };
  whileLoop(code.length);
  return res;
}
